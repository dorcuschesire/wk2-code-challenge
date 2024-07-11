const items=[];

function addItem(){
    const newItem = document.getElementById('itemInput').ariaValueMax;
    if(newItemm!==''){
        items.push({name: newItem,purchased:false});
        renderList();
        document.getElementById('itemInput').value='';
    }
}
function markAsPurchased(index){
    items[index].purchased=!
    items[index].purchased;
    renderList();
}
function clearList(){
    items.length=0;
    renderList();
}
function renderList(){
    const listContainer=document.getElementById('listContainer');
    listContainer.innerHTML='';
    items.forEach((item, index)=>{
        const listItem=document.createElement('div');
        listItem.className='list-item ${item.purchased? 'purchased':"}';
        listItem.textContent=item.name;
        listItem.onclick=()=>markAsPurchaseed(index);
        listContainer.appendChild(listItem);

    });
}