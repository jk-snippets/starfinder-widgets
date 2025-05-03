let table = null;
let svg =  document.getElementById("hexGrid");
const baseHex = {x1:59,y1:1,x2:117,y2:34,x3:117,y3:102,x4:59,y4:135,x5:1,y5:102,x6:1,y6:34};
const baseOffsetX = 117;
const baseOffsetY = 101.5;
const coordsToLine = new Map();
const coordsToElement = new Map();
drawHexmap();
let selectedHex = document.getElementById("a1");
grist.setCursorPos({rowId: 1});

grist.ready({

    allowSelectBy: true,
    requiredAccess: 'read table' 
  });

grist.onRecords(records => {
    table = records;
    //console.log(table);
    redraw(records);

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
    polygon.setAttribute("fill-opacity","0.0001")
    polygon.setAttribute("stroke-width", "1.5");
    polygon.setAttribute("id", idtoset);
    polygon.setAttribute("onclick", "clickedHex(event)");
    polygon.setAttribute("class", "jk-hex")
    svg.appendChild(polygon);
}

//draw hexes them on the svg canvas, fit to the map
function drawHexmap(){
    let incnum =1;
    for(let i=0; i<8;i++)
    {
        drawHexagon(baseOffsetX*i, 0, "a"+(i+1));
        coordsToLine.set("a"+(i+1), incnum++);
    }
    for(let i=0; i<7;i++)
    {
        drawHexagon(baseOffsetX*i +baseOffsetX/2, baseOffsetY*1, "b"+(i+1));
        coordsToLine.set("b"+(i+1), incnum++);
    }
    for(let i=0; i<7;i++)
    {
        drawHexagon(baseOffsetX*i, baseOffsetY*2, "c"+(i+1));
        coordsToLine.set("c"+(i+1), incnum++);
    }
    for(let i=0; i<7;i++)
    {
        drawHexagon(baseOffsetX*i +baseOffsetX/2, baseOffsetY*3, "d"+(i+1));
        coordsToLine.set("d"+(i+1), incnum++);
    }
    for(let i=0; i<7;i++)
    {
        drawHexagon(baseOffsetX*i, baseOffsetY*4, "e"+(i+1));
        coordsToLine.set("e"+(i+1), incnum++);
    }
    for(let i=0; i<7;i++)
    {
        drawHexagon(baseOffsetX*i +baseOffsetX/2, baseOffsetY*5, "f"+(i+1));
        coordsToLine.set("f"+(i+1), incnum++);
    }
    for(let i=0; i<7;i++)
    {
        drawHexagon(baseOffsetX*i, baseOffsetY*6, "g"+(i+1));
        coordsToLine.set("g"+(i+1), incnum++);
    }
    for(let i=0; i<7;i++)
    {
        drawHexagon(baseOffsetX*i +baseOffsetX/2, baseOffsetY*7, "h"+(i+1));
        coordsToLine.set("h"+(i+1), incnum++);
    }
    for(let i=0; i<7;i++)
    {
        drawHexagon(baseOffsetX*i, baseOffsetY*8, "i"+(i+1));
        coordsToLine.set("i"+(i+1), incnum++);
    }
    for(let i=0; i<7;i++)
    {
        drawHexagon(baseOffsetX*i +baseOffsetX/2, baseOffsetY*9, "j"+(i+1));
        coordsToLine.set("j"+(i+1), incnum++);
    }
    for(let i=0; i<7;i++)
    {
        drawHexagon(baseOffsetX*i, baseOffsetY*10, "k"+(i+1));
        coordsToLine.set("k"+(i+1), incnum++);
    }
    for(let i=0; i<7;i++)
    {
        drawHexagon(baseOffsetX*i +baseOffsetX/2, baseOffsetY*11, "l"+(i+1));
        coordsToLine.set("l"+(i+1), incnum++);
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
    selectedHex.setAttribute("fill", "#cce5ff");
    selectedHex.setAttribute("fill-opacity","0.0001")
    selectedHex = event.target;
    selectedHex.setAttribute("fill", "red");
    selectedHex.setAttribute("fill-opacity","0.1")
    //event.target.setAttribute("stroke", "#ff0000");
    console.log(event.target.id);
    let pos = coordsToLine.get(event.target.id);
    grist.setCursorPos({rowId: pos});
    
}

function redraw(records)
{
    console.log(table);
    let allHexes = document.getElementsByClassName("jk-hex");
    for(i in allHexes)
    {
        if(table[i].Claim)
        {
            allHexes[i].setAttribute("stroke", "#00FF00");
            polygon.setAttribute("stroke-width", "2");
        }
        else if(table[i].Recon)
        {
            allHexes[i].setAttribute("stroke", "#FFFF00");
        }
    }


}

