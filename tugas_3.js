function SeleksiNilai(nilaiAwal, nilaiAkhir,dataArray=[]) 
{
    
    let temp = []

    if (nilaiAwal<nilaiAkhir && dataArray.length > 5)
    {
        for (let i = 0; i < dataArray.length;i++)
        {
            // console.log(dataArray[i])
           if (dataArray[i]>nilaiAwal && dataArray[i]<nilaiAkhir)
           {
                temp.push(dataArray[i])
           }
        }

        temp.sort(function(a,b)
        {
            return a - b;
        })
        console.log(temp)

    }
    else if (nilaiAwal>nilaiAkhir)
    {
        console.log("Nilai akhir harus lebih besar dari nilai awal")
    }
    else if(dataArray.length < 5)
    {
        console.log("Jumlah angka dalam dataArray harus lebih dari 5")
    }
    
    
}

SeleksiNilai(5,20,[2,25,4,14,17,30,8])