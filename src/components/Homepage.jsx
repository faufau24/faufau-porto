import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const Homepage = () => {

  const certifications = [
    { id: 1, src: "mav.png", alt: "PHP Native" },
    { id: 2, src: "mav.png", alt: "Certification 2" },
    { id: 3, src: "mav.png", alt: "Certification 3" },
    { id: 4, src: "mav.png", alt: "Certification 4" },
    { id: 5, src: "mav.png", alt: "Certification 5" },
    { id: 6, src: "mav.png", alt: "Certification 6" },
    

  ];
  
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesPerRow: 3,
    rows: 4,
    arrows: true,
    centerMode: true,
  };
  
  
  const CertificationCarousel = () => {
    return (
      <div className="carousel-container w-full mt-8 px-4">
  <Slider {...settings} className="flex gap-4"> {/* Tambahkan gap di sini */}
    {certifications.map((cert) => (
      <div key={cert.id} className="mx-auto"> {/* Tambahkan padding */}
        <div className="bg-black p-4 rounded-lg shadow-lg space-y-2">
          <img
            src={cert.src}
            alt={cert.alt}
            className="w-full h-40 object-cover rounded-lg"
          />
          <div className="text-center">
            <h3 className="text-lg font-semibold">{cert.alt}</h3>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>

    );
  };
  
  
  
  
  return (  
    <main className="pt-0 p-0 scroll-container">
      {/* Section 1 */}
      <section 
  id="home"
  className="min-h-screen w-full bg-[url('/public/mav.png')] bg-contain bg-black bg-no-repeat bg-center flex flex-col justify-end items-center"
>
  <div className="text-center pb-20 px-8">
    <h1 className="text-3xl text-white font-bold">I'm Muhammad Alwan Fauzi</h1>
    <p className="text-l text-white mt-4 text-center">
      A fresh graduate Informatics Engineering from Padjadjaran University. 
    </p>
    <p className="text-l text-white mt-0 text-center">
    I made perfect everything about my work, 
    </p>
    <p className="text-l text-white mt-0 text-center">
    according to my principles, try as much as possible or as professional 
    </p>
    <p  className="text-l text-white mt-0 text-center">
      as possible anywhere and anytime.</p>

      <a href="#about ">
  <button
    type="button"
    className="flex justify-center mt-4 gap-2 items-center mx-auto shadow-xl text-lg bg-gray-50 text-black backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-blue-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-2 py-2 overflow-hidden border-2 rounded-full group"
  >
    More Details
    <svg
      className="w-8 h-8 justify-end group-hover:rotate-180 group-hover:bg-gray-50 text-gray-800 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-90"
      viewBox="0 0 16 19"
    >
      <path
        d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
        className="fill-gray-800 group-hover:fill-gray-800"
      ></path>
    </svg>
  </button>
</a>

  </div>
</section>

      {/* Section 2 */}
      {/* Section 2 */}
{/* Section 2 */}
<section id="about" className="min-h-[130vh] w-full bg-white flex flex-col justify-center items-center">
  <div className="min-h-screen w-full flex flex-col lg:flex-row bg-white">
    
    {/* Sisi Kiri */}
    <div className="w-full lg:w-1/3 bg-white p-6 flex flex-col items-center">
      {/* Foto */}
      <img
        src="mav.png" // Ganti dengan URL foto kamu
        alt="Profile"
        className="w-32 h-32 rounded-full object-cover shadow-md"
      />
      
      {/* Biodata */}
      <div className="mt-4 text-center">
        <h1 className="text-2xl font-bold">Muhammad Alwan Fauzi</h1>
        <p className="text-xl text-gray-600">23 years old</p>
        <p className="text-xl text-gray-600">24 October 2001</p>
        <p className="text-xl text-gray-600">East Jakarta</p>
        <p className="text-xl text-gray-600">+6281284033316</p>
        <p className="text-xl text-gray-600">m.alwanfauzi24@gmail.com</p>
      </div>

      <div className="mt-6 w-full">
        <h2 className="text-lg font-bold">Skills</h2>
        <div className="mt-4 space-y-4">
          {[{ name: "HTML", percentage: 95 }, { name: "CSS", percentage: 95 }, { name: "JavaScript", percentage: 85 }, { name: "Python", percentage: 90 }, { name: "PHP", percentage: 85 }, { name: "React JS", percentage: 95 }, { name: "Bootstrap", percentage: 90 }, { name: "Flutter", percentage: 80 }, { name: "C++", percentage: 75 }, { name: "My SQL", percentage: 80 }, { name: "Figma", percentage: 95 }].map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between text-sm font-semibold text-gray-600">
                <span>{skill.name}</span>
                <span>{skill.percentage}%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-2.5 mt-1">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Sisi Kanan */}
    <div className="w-full lg:w-2/3 bg-white p-6">
      <h2 className="text-2xl font-bold mb-5">About Me</h2>
      <p className="text-gray-700 leading-relaxed">
        Hello! I'm Muhammad Alwan Fauzi, but you can call me Fauzi. I was born in East Jakarta, and I am a fresh graduate from Padjadjaran University (Unpad). I graduated with a GPA of 3.28 out of 4.00. I am passionate about technology and always eager to learn more. I believe in continuous growth and improvement, which drives me to stay updated with the latest trends in the tech world.
        I am interested in pursuing a career in <b>Software Development (Website and Apps), Data Analyst, Data Science, UI/UX Design, IT Support, IT Project Management, Business Development, Commercial Banking, Central Bank, Strategic Planning, Product Manager, Project Manager, Sales, Corporate Partnerships and other related fields.</b>
      </p>
      <p className="mt-4 text-gray-700 leading-relaxed">
        During my time in university, I actively participated in organizational activities and gained extensive internship experience. From the 5th semester until graduated, I did not take any semester breaks, dedicating my time to internships for a total of approximately 1.5 years. I genuinely enjoy working, which is why I consistently engage in internships without pause.
        For this reason, I am committed to fully dedicating my time, energy, thoughts, and skills to the company that recruits me. I will give my best efforts to contribute to the company success.
      </p>
      <p className="mt-4 text-gray-700 leading-relaxed">
        Thus, after participating in various organizational activities and internships, I have been able to enhance several of my skills, including leadership, teamwork, effective communication, problem-solving, critical thinking, time management, creativity, work ethics, integrity, public speaking, project management, quick adaptability, analytical skills, negotiation, emotional intelligence, technological proficiency, and good decision-making.
      </p>
      <p className="mt-4 text-gray-700 leading-relaxed">
        In addition to my technical skills, I enjoy collaborating with diverse teams and taking on challenges that require creativity and strategic thinking. Whether it’s coding, designing, or brainstorming, I always give my best to deliver results that exceed expectations.
      </p>
    </div>
  </div>
</section>



          {/* Section 3 */}
      <section id="education" className="min-h-[125vh] w-full bg-black flex flex-col justify-center items-center p-6">
        <h2 className="text-3xl text-white font-bold mb-8">My Education</h2>

  {/* Timeline Container */}
  <div className="relative pl-6">
      {[
        { 
          id: 1, 
          school: "Universitas Padjadjaran", 
          degree: "S1 Teknik Informatika", 
          gpa: "3.28 / 4.00 GPA",
          year: "2019 - 2024", 
          logo: "/unpad.png" 
        },
        { 
          id: 2, 
          school: "SMA PKP JIS", 
          degree: "Jurusan IPA", 
          year: "2016 - 2019", 
          logo: "/jis.jpg" 
        },
        { 
          id: 3, 
          school: "SMPN 208 Jakarta", 
          degree: "", 
          year: "2013 - 2016", 
          logo: "/smpn.jpeg" 
        },{ 
          id: 3, 
          school: "SDN 08 Pagi", 
          degree: "", 
          year: "2007 - 2013", 
          logo: "/sdn.jpg" 
        },
      ].map((item, index, arr) => (
        <div key={item.id} className="relative flex items-start">
          {/* Garis Vertikal - Muncul jika bukan elemen terakhir */}
          {index !== arr.length - 1 && (
            <div className="absolute left-2 top-5 h-full border-l-4 border-blue-500"></div>
          )}

          {/* Titik Bulatan */}
          <div className="absolute -left-[1px] w-5 h-5 bg-blue-500 rounded-full border-4 border-white"></div>

          {/* Konten Timeline */}
          <div className="bg-gray-100 p-4 rounded-lg text-center shadow-md ml-6 mb-8">
            {/* Gambar Logo */}
            <img src={item.logo} alt={item.school} className="w-16 h-16 object-cover mx-auto mb-2 rounded-full" />

            {/* Nama Sekolah & Detail */}
            <h3 className="text-xl text-black font-semibold">{item.school}</h3>
            {item.degree && <p className="text-gray-600">{item.degree}</p>}
            {item.gpa && <p className="text-gray-500 text-sm">{item.gpa}</p>}
            <span className="text-sm text-gray-400">{item.year}</span>
          </div>
        </div>
      ))}
    </div>
      </section>




      {/* Section 4 */}
      {/* Section: Experiences */}
      <section id="experiences" className="min-h-[110vh] w-full bg-white flex flex-col justify-center items-center">
      <h2 className="text-2xl mt-20 font-bold mb-4">My Experiences</h2>
      <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      <h2></h2>

      {/* Sisi Kiri */}

      <div className="lg:w-1/2 bg-white p-6 flex flex-col items-start">
        <div className="mt-2">
          <h1 className="text-2xl font-bold mb-4 whitespace-nowrap">Organizational Experiences</h1>

          {/* Container Timeline */}
          <div className="relative ml-auto">
            {[
              { id: 1, organization: "Young Investor Unpad", position: "Manager Maintenance Development", date: "Jan 2022 - Dec 2022" },
              { id: 2, organization: "Badan Ekskutif Mahasiswa FMIPA Unpad", position: "Wakil Kepala Keuangan", date: "Jan 2021 - Dec 2021"},
              { id: 3, organization: "Unit Bulu Tangkis Unpad", position: "Staff Hubungan Eksternal", date: "Jan 2020 - Dec 2020"},
              { id: 3, organization: "Unit Tarung Derajat Unpad", position: "Staff Pengembangan Sumber Daya Manusia", date: "Jan 2020 - Dec 2020"},
            ].map((item, index, arr) => (
              <div key={item.id} className="relative flex items-start">
                {/* Garis Vertikal */}
                {index !== arr.length - 1 && (
                  <div className="absolute left-2 top-5 h-full border-l-4 border-blue-500"></div>
                )}

                {/* Titik Bulatan */}
                <div className="absolute left-[-1px] w-5 h-5 bg-blue-500 rounded-full border-4 border-white"></div>

                {/* Konten Timeline */}
                <div className="bg-gray-100 p-4 rounded-lg text-center shadow-md ml-6 mb-8">
                  

                  {/* Nama Sekolah & Detail */}
                  <h3 className="text-xl text-black font-semibold">{item.organization}</h3>
                  {item.position && <p className="text-gray-600">{item.position}</p>}
                  <span className="text-sm text-gray-400">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>        
      </div>


      {/* Sisi Kanan */}
      <div className="lg:w-1/2 bg-white p-6 flex flex-col items-center">
  <div className="mt-3 text-center">
    <h1 className="text-2xl font-bold mb-4">Work Experiences</h1>

    {/* Container Timeline */}
    <div className="relative pl-6">
      {[
        { 
          id: 1, 
          school: "Universitas Padjadjaran", 
          degree: "S1 Teknik Informatika", 
          gpa: "3.28 / 4.00 GPA",
          year: "2019 - 2024", 
          logo: "/unpad.png" 
        },
        { 
          id: 2, 
          school: "SMA PKP JIS", 
          degree: "Jurusan IPA", 
          year: "2016 - 2019", 
          logo: "/jis.jpg" 
        },
        { 
          id: 3, 
          school: "SMPN 208 Jakarta", 
          degree: "", 
          year: "2013 - 2016", 
          logo: "/smpn.jpeg" 
        },
      ].map((item, index, arr) => (
        <div key={item.id} className="relative flex items-start">
          {/* Garis Vertikal - Muncul jika bukan elemen terakhir */}
          {index !== arr.length - 1 && (
            <div className="absolute left-2 top-5 h-full border-l-4 border-blue-500"></div>
          )}

          {/* Titik Bulatan */}
          <div className="absolute -left-[1px] w-5 h-5 bg-blue-500 rounded-full border-4 border-white"></div>

          {/* Konten Timeline */}
          <div className="bg-gray-100 p-4 rounded-lg text-center shadow-md ml-6 mb-8">
            {/* Gambar Logo */}
            <img src={item.logo} alt={item.school} className="w-16 h-16 object-cover mx-auto mb-2 rounded-full" />

            {/* Nama Sekolah & Detail */}
            <h3 className="text-xl text-black font-semibold">{item.school}</h3>
            {item.degree && <p className="text-gray-600">{item.degree}</p>}
            {item.gpa && <p className="text-gray-500 text-sm">{item.gpa}</p>}
            <span className="text-sm text-gray-400">{item.year}</span>
          </div>
        </div>
      ))}
    </div>
  </div>        
</div>
    </div>
      </section>



       {/* Section 5 */}
       <section id="certifications" className="min-h-screen w-full bg-black flex flex-col justify-center items-center">
  <h2 className="text-3xl mt-20 text-white font-bold">  My Certifications</h2>

  <div className="carousel-container w-full max-w-[1200px] mx-auto mt-8 px-2 sm:px-2 lg:px-0.5">
  <Slider {...settings}>
    {certifications.map((cert) => (
      <div key={cert.id} className="card bg-white p-4 rounded-lg shadow-lg flex flex-col items-center">
        <img
          src={cert.src}
          alt={cert.alt}
          className="w-full h-60 object-cover rounded-lg"
        />
        <div className="card-content mt-2 text-center">
          <h3 className="text-lg font-semibold">{cert.alt}</h3>
          <a
            href={cert.src} // Pastikan `cert.src` adalah URL file yang bisa di-download
            download
            className="mt-2 inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 16h16"></path>
            </svg>
            Download
          </a>
        </div>
      </div>
    ))}
  </Slider>
</div>


</section>

       {/* Section 6 */}
       <section id="contact" className="min-h-[130vh] w-full bg-white flex flex-col justify-center items-center">
  <h2 className="text-3xl font-bold">Contact</h2>
  <p className="text-xl mt-4">Feel free to reach me via email or LinkedIn.</p>

  <div className="mt-6 space-y-4">
    {/* Email */}
    <div className="flex items-center justify-center gap-3">
      <i className="fas fa-envelope text-2xl text-blue-600"></i>
      <p className="text-lg">m.alwanfauzi24@gmail.com</p>
    </div>

    {/* Phone */}
    <div className="flex items-center justify-center gap-3">
      <i className="fas fa-phone-alt text-2xl text-green-600"></i>
      <p className="text-lg">+6281284033316</p>
    </div>

    {/* Address */}
    <div className="flex items-center justify-center gap-3">
      <i className="fas fa-map-marker-alt text-2xl text-red-600"></i>
      <p className="text-lg">Jl.Raya Centex, Ciracas, East Jakarta</p>
    </div>

    {/* Social Media */}
    <div className="flex items-center justify-center gap-6">
      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/muhammad-alwan-fauzi" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin text-3xl text-blue-700 hover:text-blue-500"></i>
      </a>
      {/* GitHub */}
      <a href="https://github.com/faufau24" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github text-3xl text-black hover:text-gray-800"></i>
      </a>
      {/* Whatsapp */}
      <a href="http://wa.me/6281284033316" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-whatsapp text-3xl text-green-950 hover:text-gray-800"></i>
      </a> {/* Instagram */}
      <a href="https://www.instagram.com/alwnfauzii/" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram text-3xl text-pink-600 hover:text-gray-800"></i>
      </a>
    </div>
  </div>
  <form 
    action="https://formspree.io/f/your-endpoint-id" // Ganti dengan endpoint dari Formspree
    method="POST"
    className="w-full max-w-4xl mt-8 p-8 border rounded-lg bg-gray-50 shadow-md"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
      <div className="col-span-1">
        <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full mt-2 p-3 border border-gray-300 rounded-md"
        />
      </div>

      <div className="col-span-1">
        <label htmlFor="email" className="block text-lg font-medium text-gray-700">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full mt-2 p-3 border border-gray-300 rounded-md"
        />
      </div>
    </div>

    <div className="mb-4">
      <label htmlFor="subject" className="block text-lg font-medium text-gray-700">Subject</label>
      <input
        type="text"
        id="subject"
        name="subject"
        required
        className="w-full mt-2 p-3 border border-gray-300 rounded-md"
      />
    </div>

    <div className="mb-6">
      <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
      <textarea
        id="message"
        name="message"
        required
        rows="4"
        className="w-full mt-2 p-3 border border-gray-300 rounded-md"
      ></textarea>
    </div>

    <button
      type="submit"
      className="w-full bg-blue-500 text-white text-lg py-2 rounded-md hover:bg-blue-600"
    >
      Submit
    </button>
  </form>
</section>

    </main>
  );
};

export default Homepage;
