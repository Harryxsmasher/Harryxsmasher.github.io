const projects = {


voice: {
    title: "AI Voice Review Assistant",
    image: "images/project4.png",
    description:
    "Automated engineering review documentation system built using Python and OpenAI Whisper. The tool records review discussions, converts speech to text, and generates searchable documentation, eliminating manual note-taking during engineering reviews.",
    github: "https://github.com/Harryxsmasher/voice-review-assistant"
},

cad: {
    title: "CAD Workflow Automation Tool",
    image: "images/project1.png",
    description:
    "Python-based CAD automation system developed to streamline repetitive engineering tasks including geometry cleanup, joining operations, optimization workflows, and model preparation. Built to reduce manual effort and improve engineering productivity.",
    github: "https://github.com/Harryxsmasher/cad-workflow-automation"
},

alignment: {
    title: "Tracker-Based Vehicle Alignment System",
    image: "images/project3.png",
    description:
    "Automated vehicle alignment solution for immersive VR environments using HTC Vive Trackers and Autodesk VRED. Engineers can place a tracker in the desired location and automatically align digital vehicle models without manual positioning.",
    github: "https://github.com/Harryxsmasher/vred-vehicle-alignment-system"
},

sectioning: {
    title: "Immersive Vehicle Sectioning Tool",
    image: "images/project2.png",
    description:
    "Interactive vehicle clipping and sectioning tool for Autodesk VRED. Supports X, Y, Z and 6DoF clipping, clipping inversion, pause and resume functionality, enabling engineers to inspect internal vehicle components without hiding geometry.",
    github: "https://github.com/Harryxsmasher/immersive-vehicle-sectioning-tool"
},

transfer: {
    title: "Engineering Data Transfer Tool",
    image: "images/project5.png",
    description:
    "High-performance multithreaded data transfer application designed for large engineering datasets. Features automatic hardware tuning, pause/resume support, progress tracking, and optimized transfer speeds for enterprise workflows.",
    github: "https://github.com/Harryxsmasher/engineering-data-transfer-tool"
},

object: {
    title: "Immersive Object Manipulation Tool",
    image: "images/project6.png",
    description:
    "XR-based object positioning and manipulation tool allowing users to move, position, and manage engineering models directly inside immersive review sessions without requiring external assistance.",
    github: "https://github.com/Harryxsmasher/immersive-object-manipulation-tool"
}


};

function openProject(projectId) {


const project = projects[projectId];

document.getElementById("modalTitle").innerText =
    project.title;

document.getElementById("modalImage").src =
    project.image;

document.getElementById("modalDescription").innerText =
    project.description;

document.getElementById("modalGithub").href =
    project.github;

document.getElementById("projectModal").style.display =
    "flex";


}

function closeProject() {


document.getElementById("projectModal").style.display =
    "none";


}

window.onclick = function(event) {


const modal =
    document.getElementById("projectModal");

if (event.target === modal) {
    closeProject();
}


};
