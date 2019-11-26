const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors())
app.get('/converterTemperatura', (req,res) => {

    valor = parseInt(req.query.valor)

    switch(req.query.de){
        case 'C':
            if(req.query.para === 'F'){
                var resp = (valor * (9/5)) + 32;
                res.json({
                    resposta:Number(resp.toFixed(2)),
                    status:'ok'
                });
            }else if(req.query.para === 'K'){
                var resp = (valor + 273.15);
                res.json({
                    resposta:Number(resp.toFixed(2)),
                    status:'ok'
                });
            }else{
                res.json({
                    resposta:999,
                    status:'ko'
                });
            }
            break;
        case 'K':
            if(req.query.para === 'F'){
                var resp = (Number((valor - 273.15).toFixed(2)) * (9/5)) + 32;
                res.json({
                    resposta:Number(resp.toFixed(2)),
                    status:'ok'
                });
            }else if(req.query.para === 'C'){
                var resp = (valor - 273.15);
                res.json({
                    resposta:Number(resp.toFixed(2)),
                    status:'ok'
                });
            }else{
                res.json({
                    resposta:999,
                    status:'ko'
                });
            }
            break;
        case 'F':
            if(req.query.para === 'K'){
                var resp = ((valor - 32)*(5/9)) + 273.15;
                res.json({
                    resposta:Number(resp.toFixed(2)),
                    status:'ok'
                });
            }else if(req.query.para === 'C'){
                var resp = ((valor - 32)*(5/9));
                res.json({
                    resposta:Number(resp.toFixed(2)),
                    status:'ok'
                });
            }else{
                res.json({
                    resposta:999,
                    status:'ko'
                });
            }
            break;
        default:
            console.log('ERROR 001 - Tipo requisitado para conversão inválido');
            res.json({
                resposta:999,
                status:'ko'
            });
            break;
    }
})


app.listen(5050, (err)=>{
    if(err){
        console.log('Falha ao conectar ao localhost:5000');
    }else{
        console.log('Ouvindo na porta 5050...')
    }
})

module.exports = app;