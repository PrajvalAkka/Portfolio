var tablinks=document.getElementsByClassName("tab-links");
var tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
// document.addEventListener('DOMContentLoaded', function() {
//     const progressBar = document.querySelector('.progress-bar');
//     const percentageText = document.querySelector('.percentage');
    
//     const circumference = 2 * Math.PI * 90; // 2πr
//     progressBar.style.strokeDasharray = circumference;
//     progressBar.style.strokeDashoffset = circumference;
    
//     // Function to set the progress percentage
//     function setProgress(percent) {
//         // Ensure value is between 0-100
//         percent = Math.min(100, Math.max(0, percent));
        
//         const offset = circumference - (percent / 100 * circumference);
//         progressBar.style.strokeDashoffset = offset;
//         percentageText.textContent = `${Math.round(percent)}%`;
        
//         // Change color based on percentage
//         if (percent < 30) {
//             progressBar.style.stroke = '#FF5252'; // Red
//         } else if (percent < 70) {
//             progressBar.style.stroke = '#FFC107'; // Yellow/Orange
//         } else {
//             progressBar.style.stroke = '#4CAF50'; // Green
//         }
//     }
    
//     // Initial progress value - CHANGE THIS VALUE TO SET INITIAL PERCENTAGE
//     const initialProgress = 75;
//     setProgress(initialProgress);
    
//     // Make function available globally so it can be called from console or other scripts
//     window.setProgressTo = setProgress;
    
//     // Example: Uncomment the following code to animate from 0 to the initial progress value
//     /*
//     let currentProgress = 0;
//     const interval = setInterval(() => {
//         currentProgress += 1;
//         setProgress(currentProgress);
//         if (currentProgress >= initialProgress) {
//             clearInterval(interval);
//         }
//     }, 20);
//     */
// });