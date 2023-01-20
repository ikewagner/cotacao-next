import axios from 'axios';
import { useState, useEffect } from 'react';

function Dashboard() {
  const [dolar, setDolar] = useState(0);
  const [porcentagemDolar, setDollarPorcetagem] = useState(0);
  const [highDolar, setDolarHigh] = useState(0);
  const [lowDolar, setDolarLow] = useState(0);
  const [dataDolar, setDolarData] = useState(0);


  const [euro, setEuro] = useState(0);
  const [porcentagemEuro, setEuroPorcetagem] = useState(0);
  const [highEuro, setEuroHigh] = useState(0);
  const [lowEuro, setEuroLow] = useState(0);
  const [dataEuro, setEuroData] = useState(0);

  useEffect(() => {
    let intervalId = null;
    async function getCurrencies() {
      try {
        const response = await axios.get('https://economia.awesomeapi.com.br/all/USD-BRL,EUR-BRL');
        setDolar(response.data.USD.ask);
        setDollarPorcetagem(response.data.USD.pctChange)
        setDolarHigh(response.data.USD.high)
        setDolarLow(response.data.USD.low)
        setDolarData(response.data.USD.create_date)


        setEuro(response.data.EUR.ask);
        setEuroPorcetagem(response.data.EUR.pctChange)
        setEuroHigh(response.data.EUR.high)
        setEuroLow(response.data.EUR.low)
        setEuroData(response.data.EUR.create_date)

      } catch (error) {
        console.error(error);
      }
    }
    getCurrencies();
    intervalId = setInterval(getCurrencies, 30000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <section class="py-8 mt-4 mx-4 ">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="w-full md:w-1/2 lg:w-1/4 p-4">
              <div class="pt-6 text-center bg-white rounded py-6">
                <h4 class="mb-2 text-xs text-gray-500">Dolar para Real</h4>
                <p class="mb-1 text-4xl font-bold">{dolar}</p>
                <div class="chart" data-type="area-small" data-variant="indigo"></div>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 p-4">
              <div class="pt-6 text-center bg-white rounded py-6">
                <h4 class="mb-2 text-xs text-gray-500">Máximo</h4>
                <p class="mb-1 text-4xl font-bold">{highDolar}</p>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 p-4">
              <div class="pt-6 text-center bg-white rounded py-6">
                <h4 class="mb-2 text-xs text-gray-500">Mínimo</h4>
                <p class="mb-1 text-4xl font-bold">{lowDolar}</p>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 p-4">
              <div class="pt-6 text-center bg-white rounded py-6">
                <h4 class="mb-2 text-xs text-gray-500">Porcentagem de Variação</h4>
                <p class="mb-1 text-4xl font-bold">{porcentagemDolar}%</p>
              </div>
            </div>
            <p className='py-4 flex justify-center font-primary text-gray-500 items-center'>Última atualização: {dataDolar} </p>
          </div>
        </div>
      </section>
      <section class="py-8 mt-4 mx-4">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="w-full md:w-1/2 lg:w-1/4 p-4">
              <div class="pt-6 text-center bg-white rounded py-6">
                <h4 class="mb-2 text-xs text-gray-500">Euro para Real</h4>
                <p class="mb-1 text-4xl font-bold">{euro}</p>
                <div class="chart" data-type="area-small" data-variant="indigo"></div>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 p-4">
              <div class="pt-6 text-center bg-white rounded py-6">
                <h4 class="mb-2 text-xs text-gray-500">Máximo</h4>
                <p class="mb-1 text-4xl font-bold">{highEuro}</p>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 p-4">
              <div class="pt-6 text-center bg-white rounded py-6">
                <h4 class="mb-2 text-xs text-gray-500">Mínimo</h4>
                <p class="mb-1 text-4xl font-bold">{lowEuro}</p>
              </div>
            </div>
            <div class="w-full md:w-1/2 lg:w-1/4 p-4">
              <div class="pt-6 text-center bg-white rounded py-6">
                <h4 class="mb-2 text-xs text-gray-500">Porcentagem de Variação</h4>
                <p class="mb-1 text-4xl font-bold">{porcentagemEuro}%</p>
              </div>
            </div>
            <p className='py-4 flex justify-center font-primary text-gray-500 items-center'>Última atualização: {dataEuro} </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;