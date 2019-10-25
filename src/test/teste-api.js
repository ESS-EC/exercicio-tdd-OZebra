//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let api = require('../api');
let should = chai.should();

chai.use(chaiHttp); //Middleware de javascript, não precisa entender por hora

/*
  As funções são muito intuitivas
  describe(texto , função):
    texto: nome ou título do teste
    função: função a ser executada para o teste
  it(texto, função_anônima(done)):
    texto: descrição do que o teste deveria retornar.
    função: teste a ser feito.
      se você não entender a sintaxe anônima de função, basicamente function(param){} é a mesma coisa que () => {}, você cria uma função sem nome;
      essa função do it recebe o parâmetro done para saber quando o teste acabou.

  Fluxo: Describe -> function -> it (should) -> done.

  O resto do código é basicamente sintaxe e uso da lib chai pra fazer testes com requests http;

*/

describe('Testando conversão de temperatura C° -> K° ', () => {
  var temperatura = 40;
  it('Deveria retornar a conversão do valor discriminado na url de Celsius para Kelvin', (done) => {
    chai.request(api) //Faz um request para minha api (implementada em api.js)
      .get('/converterTemperatura?valor='+ temperatura +'&de=C&para=K') //Faz um get para esse URL que é tratado na api
      .end((err, res) => {//Recebe um possível erro e a resposta do servidor, e analisa a resposta.
                          //Aconselho olhar lá no arquivo da api pra entender sobre como enviar um json como resposta.
        res.should.have.status(200);
        res.body.should.have.property('resposta').eql(313.15); //Fórmula de conversão kelvin celsius
        done(); //finaliza o teste
      });
  });
});

describe('Testando conversão de temperatura C° -> F° ', () => {
  var temperatura = 40;
  it('Deveria retornar a conversão do valor discriminado na url de Celsius para Fahrenheit', (done) => {
    chai.request(api)
      .get('/converterTemperatura?valor='+ temperatura +'&de=C&para=F')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('resposta').eql(104); //Fórmula de conversão kelvin celsius
        done();
      });
  });
});

describe('Testando conversão de temperatura K° -> C° ', () => {
  var temperatura = 40;
  it('Deveria retornar a conversão do valor discriminado na url de Celsius para Fahrenheit', (done) => {
    chai.request(api)
      .get('/converterTemperatura?valor='+ temperatura +'&de=K&para=C')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('resposta').eql(-233.15); //Fórmula de conversão kelvin celsius
        done();
      });
  });
});

describe('Testando conversão de temperatura K° -> F° ', () => {
  var temperatura = 40;
  it('Deveria retornar a conversão do valor discriminado na url de Celsius para Fahrenheit', (done) => {
    chai.request(api)
      .get('/converterTemperatura?valor='+ temperatura +'&de=K&para=F')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('resposta').eql(-387.67); //Fórmula de conversão kelvin celsius
        done();
      });
  });
});

describe('Testando conversão de temperatura F° -> C° ', () => {
  var temperatura = 40;
  it('Deveria retornar a conversão do valor discriminado na url de Celsius para Fahrenheit', (done) => {
    chai.request(api)
      .get('/converterTemperatura?valor='+ temperatura +'&de=F&para=C')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('resposta').eql(4.44); //Fórmula de conversão kelvin celsius
        done();
      });
  });
});

describe('Testando conversão de temperatura F° -> K° ', () => {
  var temperatura = 40;
  it('Deveria retornar a conversão do valor discriminado na url de Celsius para Fahrenheit', (done) => {
    chai.request(api)
      .get('/converterTemperatura?valor='+ temperatura +'&de=F&para=K')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('resposta').eql(277.59); //Fórmula de conversão kelvin celsius
        done();
      });
  });
});

describe('Testando conversão de temperatura F° -> F° ', () => {
  var temperatura = 40;
  it('Deveria retornar a conversão do valor discriminado na url de Celsius para Fahrenheit', (done) => {
    chai.request(api)
      .get('/converterTemperatura?valor='+ temperatura +'&de=F&para=F')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('status').eql('ko'); //Fórmula de conversão kelvin celsius
        done();
      });
  });
});

describe('Testando conversão de temperatura C° -> C° ', () => {
  var temperatura = 40;
  it('Deveria retornar a conversão do valor discriminado na url de Celsius para Fahrenheit', (done) => {
    chai.request(api)
      .get('/converterTemperatura?valor='+ temperatura +'&de=C&para=C')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('status').eql('ko'); //Fórmula de conversão kelvin celsius
        done();
      });
  });
});

describe('Testando conversão de temperatura K° -> K° ', () => {
  var temperatura = 40;
  it('Deveria retornar a conversão do valor discriminado na url de Celsius para Fahrenheit', (done) => {
    chai.request(api)
      .get('/converterTemperatura?valor='+ temperatura +'&de=K&para=K')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.have.property('status').eql('ko'); //Fórmula de conversão kelvin celsius
        done();
      });
  });
});