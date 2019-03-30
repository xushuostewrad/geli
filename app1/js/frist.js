
var table = (function(){
    var $box;
    return{
        init($el){
            $box = $($el);
           this.getData();
        },
        event(){

        },
        getData(){
            $.getJSON('json/table.json',data =>{
                this.insertData(data);
            })
        },
        insertData({data}){
            data.forEach(x =>{
                var htmlTemplate = `
                <tr>
                    <td>${x.id}</td>
                    <td>${x.name}</td>
                    <td>${x.price}</td>
                </tr>
                `
                $box.append(htmlTemplate);
            })
        }
    }
}()) 