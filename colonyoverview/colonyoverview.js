grist.ready({ requiredAccess: 'read table' });
grist.onRecords(table => {
//console.log(table);
selectedMonth = table.length-1;

//set MonthNum for title
document.getElementById('monthNum').innerText = table[selectedMonth].Month-1;

//filter function if needed
let totals = {RU:0, Unrest:0, Size:0, maxIL:0, ACC:0, CUL:0, ECO:0, MAG:0, TEC:0};
for (let i = 0; i < selectedMonth; i++)
{
  console.log(table[i]);
  totals.RU+=table[i].RU_Change;
  totals.Unrest+=table[i].Unrest_Change;
  totals.Size+=table[i].Size_Change;
  totals.maxIL+=table[i].MaxItem_Change;
  totals.ACC+=table[i].ACC_Change;
  totals.CUL+=table[i].CUL_Change;
  totals.ECO+=table[i].ECO_Change;
  totals.MAG+=table[i].MAG_Change;
  totals.TEC+=table[i].TEC_Change;
}

document.getElementById('RU').innerText = totals.RU;
document.getElementById('Unrest').innerText = totals.Unrest;
document.getElementById('Size').innerText = totals.Size;
document.getElementById('maxIL').innerText = totals.maxIL;
document.getElementById('eventChance').innerText = table[selectedMonth].EventChance+"%";
document.getElementById('targetNum').innerText = Math.ceil(totals.Size/5);
document.getElementById('ACC').innerText = totals.ACC;
document.getElementById('CUL').innerText = totals.CUL;
document.getElementById('ECO').innerText = totals.ECO;
document.getElementById('MAG').innerText = totals.MAG;
document.getElementById('TEC').innerText = totals.TEC;



document.getElementById('monthNum2').innerText = table[selectedMonth].Month-1;
let totals2 = {RU:0, Unrest:0, Size:0, maxIL:0, ACC:0, CUL:0, ECO:0, MAG:0, TEC:0};
for (let i = 0; i < selectedMonth+1; i++)
{
  
  totals2.RU+=table[i].RU_Change;
  totals2.Unrest+=table[i].Unrest_Change;
  totals2.Size+=table[i].Size_Change;
  totals2.maxIL+=table[i].MaxItem_Change;
  totals2.ACC+=table[i].ACC_Change;
  totals2.CUL+=table[i].CUL_Change;
  totals2.ECO+=table[i].ECO_Change;
  totals2.MAG+=table[i].MAG_Change;
  totals2.TEC+=table[i].TEC_Change;
}

document.getElementById('RU2').innerText = totals2.RU;
document.getElementById('Unrest2').innerText = totals2.Unrest;
document.getElementById('Size2').innerText = totals2.Size;
document.getElementById('maxIL2').innerText = totals2.maxIL;
document.getElementById('eventChance2').innerText = table[selectedMonth+1].EventChance+"%";
document.getElementById('targetNum2').innerText = Math.ceil(totals2.Size/5);
document.getElementById('ACC2').innerText = totals2.ACC;
document.getElementById('CUL2').innerText = totals2.CUL;
document.getElementById('ECO2').innerText = totals2.ECO;
document.getElementById('MAG2').innerText = totals2.MAG;
document.getElementById('TEC2').innerText = totals2.TEC;


});
grist.onRecord(record => {

});

