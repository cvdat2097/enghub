// Page format
document.getElementById('title').innerHTML = "KẾT QUẢ THI";


// Course array
var Course = function (ID, link, lScore, rScore) {
    this.ID = ID;
    this.name = name;
    this.lScore = lScore;
    this.rScore = rScore;
}

var courseList = [new Course('001', 'http://google.com/', 5, 5),
new Course('001', 'http://google.com/', 5, 6),
new Course('001', 'http://google.com/', 7, 7),
new Course('001', 'http://google.com/', 4, 8)];

console.log(courseList);

// Read score
var localStorage = window.localStorage;

localStorage.setItem('lScore', '5');
localStorage.setItem('rScore', '6');

var listening = localStorage.getItem('lScore');
var reading = localStorage.getItem('rScore');

// Create course HTML
function CreateCourseHTML(course) {
    var courseContainer = document.getElementById('courses-container');
    var node = document.createElement("div");
    var att = document.createAttribute("class");
    att.value = "course";
    node.setAttributeNode(att);

    courseContainer.appendChild(node);

    var node1 = document.createElement("h2");
    var att1 = document.createAttribute("class");
    att1.value = "course-name";
    node1.innerHTML = "Ten khoa hoc";
    node1.setAttributeNode(att1);
    node.appendChild(node1);

    var node1 = document.createElement("p");
    var att1 = document.createAttribute("class");
    att1.value = "course-description";
    node1.innerHTML = "Mo ta khoa hoc";
    node1.setAttributeNode(att1);    
    node.appendChild(node1);

    var node1 = document.createElement("button");
    var att1 = document.createAttribute("class");
    att1.value = "course-link";
    var att2 = document.createAttribute("onblick");
    att2.value = "window.location.href=\"#\"";
    node1.innerHTML = "TÌM HIỂU THÊM";
    node1.setAttributeNode(att1);
    node1.setAttributeNode(att2);        
    node.appendChild(node1);

    console.log("Node created!");
}

// Recommend course
for (var i = 0; i < courseList.length; i++) {
    if (listening >= courseList[i].lScore && reading >= courseList[i].rScore) {
        console.log(courseList[i]);
    }
}

CreateCourseHTML(1);
CreateCourseHTML(1);
CreateCourseHTML(1);
