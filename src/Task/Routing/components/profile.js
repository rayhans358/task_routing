import { useNavigate } from "react-router-dom";

const Profile = () => {
  const style = {
    backgroundColor: '#00a7ee',
    borderRadius: '5px',
    height: '10vh',
    border: 'none',
    cursor: 'pointer'
  }
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('../home');
  }
  const handleAbout = () => {
    navigate('../about');
  }

  return(
    <>
    <h3>Ini halaman Profile!</h3>
    <p>
      Ada banyak variasi tulisan Lorem Ipsum yang tersedia, tapi kebanyakan sudah mengalami perubahan bentuk, entah karena unsur humor atau kalimat yang diacak hingga nampak sangat tidak masuk akal. Jika anda ingin menggunakan tulisan Lorem Ipsum, anda harus yakin tidak ada bagian yang memalukan yang tersembunyi di tengah naskah tersebut. Semua generator Lorem Ipsum di internet cenderung untuk mengulang bagian-bagian tertentu. Karena itu inilah generator pertama yang sebenarnya di internet. Ia menggunakan kamus perbendaharaan yang terdiri dari 200 kata Latin, yang digabung dengan banyak contoh struktur kalimat untuk menghasilkan Lorem Ipsun yang nampak masuk akal. Karena itu Lorem Ipsun yang dihasilkan akan selalu bebas dari pengulangan, unsur humor yang sengaja dimasukkan, kata yang tidak sesuai dengan karakteristiknya dan lain sebagainya.
    </p>
    
    <button onClick={handleHome} className="mr3" style={style}>Back Home</button>
    <button onClick={handleAbout} className="mr3" style={style}>Back About</button>
    
    </>
  )
}

export default Profile;