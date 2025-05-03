let selectedHex = null;
let table = null;
let svg =  document.getElementById("hexGrid");
const baseHex = {x1:59,y1:1,x2:117,y2:34,x3:117,y3:102,x4:59,y4:135,x5:1,y5:102,x6:1,y6:34};
const baseOffsetX = 117;
const baseOffsetY = 101.5;
drawHexmap();

grist.ready({

    allowSelectBy: true,
    requiredAccess: 'read table' 
  });
grist.onRecords(records => {
    table = records;
    console.log(table);
    redraw();
});




function drawHexagon(offx, offy, idtoset) {
    //build the hexagons from my very hacky base hexagon
    let points = [];
    points.push((baseHex.x1+offx)+","+(baseHex.y1+offy));
    points.push((baseHex.x2+offx)+","+(baseHex.y2+offy));
    points.push((baseHex.x3+offx)+","+(baseHex.y3+offy));
    points.push((baseHex.x4+offx)+","+(baseHex.y4+offy));
    points.push((baseHex.x5+offx)+","+(baseHex.y5+offy));
    points.push((baseHex.x6+offx)+","+(baseHex.y6+offy));

    const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    polygon.setAttribute("points", points.join(" "));
    polygon.setAttribute("stroke", "#999999");
    polygon.setAttribute("fill", "#cce5ff");
    polygon.setAttribute("fill-opacity","0.001")
    polygon.setAttribute("stroke-width", "1.5");
    polygon.setAttribute("id", idtoset);
    polygon.setAttribute("onclick", "clickedHex(event)");
    svg.appendChild(polygon);
}

//draw hexes them on the svg canvas, fit to the map
function drawHexmap(){
    for(let i=0; i<8;i++)
    {
        drawHexagon(baseOffsetX*i, 0, "a"+(i+1));
    }
    for(let i=0; i<7;i++)
    {
        drawHexagon(baseOffsetX*i +baseOffsetX/2, baseOffsetY*1, "b"+(i+1));
    }
    for(let i=0; i<7;i++)
    {
        drawHexagon(baseOffsetX*i, baseOffsetY*2, "c"+(i+1));
    }
    for(let i=0; i<7;i++)
    {
        drawHexagon(baseOffsetX*i +baseOffsetX/2, baseOffsetY*3, "d"+(i+1));
    }
    for(let i=0; i<7;i++)
    {
        drawHexagon(baseOffsetX*i, baseOffsetY*4, "e"+(i+1));
    }
    for(let i=0; i<7;i++)
    {
        drawHexagon(baseOffsetX*i +baseOffsetX/2, baseOffsetY*5, "f"+(i+1));
    }
    for(let i=0; i<7;i++)
    {
        drawHexagon(baseOffsetX*i, baseOffsetY*6, "g"+(i+1));
    }
    for(let i=0; i<7;i++)
    {
        drawHexagon(baseOffsetX*i +baseOffsetX/2, baseOffsetY*7, "h"+(i+1));
    }
    for(let i=0; i<7;i++)
    {
        drawHexagon(baseOffsetX*i, baseOffsetY*8, "i"+(i+1));
    }
    for(let i=0; i<7;i++)
    {
        drawHexagon(baseOffsetX*i +baseOffsetX/2, baseOffsetY*9, "j"+(i+1));
    }
    for(let i=0; i<7;i++)
    {
        drawHexagon(baseOffsetX*i, baseOffsetY*10, "k"+(i+1));
    }
    for(let i=0; i<7;i++)
    {
        drawHexagon(baseOffsetX*i +baseOffsetX/2, baseOffsetY*11, "l"+(i+1));
    }
/*
for(let j=1; j<10;j=j+2)
{
for(let i=0; i<7;i++)
{
    drawHexagon(baseOffsetX*i +baseOffsetX/2, baseOffsetY*j);
}
for(let i=0; i<7;i++)
{
    drawHexagon(baseOffsetX*i, baseOffsetY*(j+1));
}
}
for(let i=0; i<7;i++)
{
    drawHexagon(baseOffsetX*i+baseOffsetX/2, baseOffsetY*11);
}*/
}


function clickedHex(event)
{
    selectedHex = null;
    event.target.setAttribute("stroke", "#ff0000");
    console.log(event.target.id)

    grist.setCursorPos({rowId: 20});
    
}

function redraw()
{
    //TODO
}


