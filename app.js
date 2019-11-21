var line;
var width = 800, height = 600;
var mx = 0, my = 0;
var lineFinish = true;
var svg = d3.select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .on("mousedown", mousedown)
    .on("mouseup", mouseup);


function mousedown() {
    var m = d3.mouse(this);
    line = svg.append("line")
        .attr("x1", m[0])
        .attr("y1", m[1])
        .attr("x2", m[0])
        .attr("y2", m[1]);
    mx = m[0], my = m[1];
    svg.on("mousemove", mousemove);
    if (lineFinish == true) {
        lineFinish = false;
    } else {
        lineFinish = true;
    }
}

function mousemove() {
    var m = d3.mouse(this);
    line.attr("x2", m[0])
        .attr("y2", m[1]);
}
function mouseup() {
    if (lineFinish) {
        svg.on("mousemove", null);
    }
}
