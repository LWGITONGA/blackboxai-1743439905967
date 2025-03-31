// East Africa Job Listings
const jobListings = [
    {
        id: 1,
        title: "Graphic Designer",
        company: "Nairobi Digital Agency",
        location: "Nairobi, Kenya",
        salary: "KES 60,000 - 100,000",
        type: "Full-time",
        description: "Create visual content for digital campaigns. 2+ years experience required.",
        posted: "2 days ago",
        requirements: ["Diploma in Design", "Portfolio", "Adobe Creative Suite"]
    },
    {
        id: 2,
        title: "Primary School Teacher",
        company: "Kampala International School", 
        location: "Kampala, Uganda",
        salary: "UGX 1,200,000 - 1,800,000",
        type: "Full-time",
        description: "Teach primary students following national curriculum.",
        posted: "1 week ago",
        requirements: ["Teaching certificate", "3+ years experience"]
    },
    {
        id: 3,
        title: "Software Developer",
        company: "Dar Tech Solutions",
        location: "Dar es Salaam, Tanzania",
        salary: "TZS 1,500,000 - 2,500,000",
        type: "Contract",
        description: "Develop web applications using modern frameworks.",
        posted: "3 days ago",
        requirements: ["Degree in CS", "JavaScript/React", "2+ years experience"]
    }
];

function displayJobs() {
    if (document.getElementById('job-listings')) {
        const container = document.getElementById('job-listings');
        container.innerHTML = jobListings.map(job => `
            <div class="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <h3 class="text-xl font-bold text-indigo-700">${job.title}</h3>
                <p class="text-gray-600">${job.company} • ${job.location}</p>
                <div class="my-3">
                    <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">${job.type}</span>
                    <span class="ml-2">${job.salary}</span>
                </div>
                <p class="my-2">${job.description}</p>
                <div class="mt-4">
                    <h4 class="font-bold">Requirements:</h4>
                    <ul class="list-disc pl-5">
                        ${job.requirements.map(req => `<li>${req}</li>`).join('')}
                    </ul>
                </div>
                <p class="text-sm text-gray-500 mt-4">Posted ${job.posted}</p>
                <button class="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded">
                    Apply Now
                </button>
            </div>
        `).join('');
    }
}

// Initialize when page loads
if (window.location.pathname.includes('jobs.html')) {
    document.addEventListener('DOMContentLoaded', displayJobs);
}