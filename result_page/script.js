// Page format
document.getElementById('title').innerHTML = "EngHub.com";


// Course array
var Course = function (ID, name, link, description, lScore, rScore) {
    this.ID = ID;
    this.name = name;
    this.link = link;
    this.description = description;
    this.lScore = lScore;
    this.rScore = rScore;
}

var courseList = [new Course('001', 'Topica', 'http://google.com/', "Lorem ipsum dolor sit amet, no ridens facilis adolescens mei. Ex nullam noster vituperata ius, erat dicta oporteat cu nec. Percipit liberavisse eos ex, et accusata salutandi sea. Pri an molestie honestatis, ut quem argumentum per. Nec at modus evertitur quaerendum, commodo inciderint vis ut.", 3, 3),
new Course('002', 'TiengAnh123', 'http://google.com/', "Lorem ipsum dolor sit amet, no ridens facilis adolescens mei. Ex nullam noster vituperata ius, erat dicta oporteat cu nec. Percipit liberavisse eos ex, et accusata salutandi sea. Pri an molestie honestatis, ut quem argumentum per. Nec at modus evertitur quaerendum, commodo inciderint vis ut.", 2, 2),
new Course('003', 'HelloChao', 'http://google.com/', "Lorem ipsum dolor sit amet, no ridens facilis adolescens mei. Ex nullam noster vituperata ius, erat dicta oporteat cu nec. Percipit liberavisse eos ex, et accusata salutandi sea. Pri an molestie honestatis, ut quem argumentum per. Nec at modus evertitur quaerendum, commodo inciderint vis ut.", 5, 9),
new Course('004', 'Voca', 'http://google.com/', "Lorem ipsum dolor sit amet, no ridens facilis adolescens mei. Ex nullam noster vituperata ius, erat dicta oporteat cu nec. Percipit liberavisse eos ex, et accusata salutandi sea. Pri an molestie honestatis, ut quem argumentum per. Nec at modus evertitur quaerendum, commodo inciderint vis ut.", 5, 6)];

// Read score
var localStorage = window.localStorage;

localStorage.setItem('lScore', '5');
localStorage.setItem('rScore', '6');

var listening = localStorage.getItem('lScore');
var reading = localStorage.getItem('rScore');
document.getElementById('listening-score').innerHTML = listening.toString();
document.getElementById('reading-score').innerHTML = reading.toString();

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
    node1.setAttributeNode(att1);
    node.appendChild(node1);
    node1.innerHTML = course.name;

    var node1 = document.createElement("p");
    var att1 = document.createAttribute("class");
    att1.value = "course-description";
    node1.setAttributeNode(att1);
    node.appendChild(node1);
    node1.innerHTML = course.description;

    var node1 = document.createElement("button");
    var att1 = document.createAttribute("class");
    att1.value = "course-link";
    var att2 = document.createAttribute("onclick");
    att2.value = "window.location.href=\"" + course.link + "\"";
    node1.innerHTML = "TÌM HIỂU THÊM";
    node1.setAttributeNode(att1);
    node1.setAttributeNode(att2);
    node.appendChild(node1);

    console.log("Node created!");
}

console.log(courseList);
// Recommend course
// Sort course
function distance(lRequirement, rRequirement, listening, reading) {
    var lr = Number.parseInt(lRequirement);
    var rr = Number.parseInt(rRequirement);
    var l = Number.parseInt(listening);
    var r = Number.parseInt(reading);
    if (l - lr < 0)
        return -1;
    if (r - rr < 0)
        return -1;
    return (l - lr) + (r - rr);
}
for (var i = 0; i < courseList.length; i++) {
    for (var j = i + 1; j < courseList.length; j++) {
        var x1 = distance(courseList[i].lScore, courseList[i].rScore, listening, reading);
        var x2 = distance(courseList[j].lScore, courseList[j].rScore, listening, reading);
        if (x1 > x2) {
            var t = courseList[i];
            courseList[i] = courseList[j];
            courseList[j] = t;
        }
    }
}

console.log(courseList);

// Create course HTML element
for (var i = 0; i < courseList.length; i++) {
    if (listening >= courseList[i].lScore && reading >= courseList[i].rScore) {
        CreateCourseHTML(courseList[i]);
    }
}
