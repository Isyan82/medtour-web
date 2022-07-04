import './App.css';
import Clinic from './components/clinic/Clinic';

// datas
const doctorsData = [
  {
    name: 'Dr. Semuel Tarikson',
    img: '/img/Semuel_Tarikson.jpg',
    speciality: 'Cardiologist',
    education: 'Doctor of Sciences in Cardiology. Laureate of the medical degree. Education Standford',
    languages: [
      {
        icon: '/img/en.png',
        descr: 'en'
      },
      {
        icon: '/img/de.png',
        descr: 'de'
      }
    ],
    experience: 10
  },
  {
    name: 'Dr. Sara Fitch',
    img: '/img/Sara_Fitch.jpg',
    speciality: 'Cardiologist',
    education: 'Doctor of Sciences in Cardiology. Laureate of the medical degree. Education Standford',
    languages: [
      {
        icon: '/img/en.png',
        descr: 'en'
      },
      {
        icon: '/img/de.png',
        descr: 'de'
      }
    ],
    experience: 7
  },
  {
    name: 'Dr. Conor Deniman',
    img: '/img/Conor_Deniman.jpg',
    speciality: 'Cardiologist',
    education: 'Doctor of Sciences in Cardiology. Laureate of the medical degree. Education Standford',
    languages: [
      {
        icon: '/img/en.png',
        descr: 'en'
      },
      {
        icon: '/img/de.png',
        descr: 'de'
      }
    ],
    experience: 7
  }
]

const procedures = [{
  name: 'Reproductive medicine',
  id: 'jshsgtd'
},
{
  name: 'Orthopedics',
  id: '8474dgd'
},
{
  name: 'Ophthalmology',
  id: 'lsosrr'
},
{
  name: 'Ophthalmology',
  id: '99ee7'
},
{
  name: 'Orthopedics',
  id: 'sjsya6a6'
},
]

const operations = [
  { name: 'Corneal transplantation' },
  { name: 'Laser vision correction' },
  { name: 'Lens Replacement' },
  { name: 'Vascular treatment' },
  { name: 'Optic nerve transplantation' },
]

const reviewsData = [
  {
    name: 'Antonio Ritz',
    avatar: '/img/antonio_ritz.jpg',
    location: 'Brazil',
    date: 'April 2020',
    text: '“Pengalaman yang sangat menyenangkan, di tambah pelayananya ramah banget, top banget, rekomend buat yang mau cobain!”',
    id: '8djfd0'
  },
  {
    name: 'Mukilash',
    avatar: '',
    location: 'Germany',
    date: 'April 2020',
    text: '“Pengalaman yang sangat menyenangkan, di tambah pelayananya ramah banget, top banget, rekomend buat yang mau cobain!”',
    id: 'kdss7s'
  },
  {
    name: '',
    avatar: '',
    location: 'USA',
    date: 'April 2020',
    text: '“Pengalaman yang sangat menyenangkan, di tambah pelayananya ramah banget, top banget, rekomend buat yang mau cobain!”',
    id: '0ksksue'
  },
  {
    name: '',
    avatar: '',
    location: 'USA',
    date: 'April 2020',
    text: '“Pengalaman yang sangat menyenangkan, di tambah pelayananya ramah banget, top banget, rekomend buat yang mau cobain!”',
    id: 'lsksye87'
  }
]

const services = [
  {
    title: 'Laser vision correction',
    price: 1500,
    id: '7463838'
  },
  {
    title: 'Rehabilitation',
    price: 3000,
    id: '7463773'
  },
  {
    title: 'Cataract diagnosis',
    price: 2000,
    id: '746093'
  },
]

function App() {
  return (
    <div className="App">
      <Clinic
        doctorsData={doctorsData}
        procedures={procedures}
        operations={operations}
        reviewsData={reviewsData}
        services={services}
      />
    </div>
  );
}

export default App;
