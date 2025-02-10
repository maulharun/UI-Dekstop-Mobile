export default function Page() {
    const students = [
      { no: 1, nim: "220101", nama: "Ahmad", gender: "L", prodi: "Informatika", kelas: "IF-1", semester: 2, alamat: "Bandung", hobby: "Coding", citaCita: "Software Engineer" },
      { no: 2, nim: "220102", nama: "Siti", gender: "P", prodi: "Sistem Informasi", kelas: "SI-2", semester: 4, alamat: "Jakarta", hobby: "Membaca", citaCita: "Data Scientist" },
      { no: 3, nim: "220103", nama: "Budi", gender: "L", prodi: "Teknik Elektro", kelas: "TE-1", semester: 6, alamat: "Surabaya", hobby: "Elektronik", citaCita: "IoT Engineer" },
    ];
  
    return (
      <div className="p-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen text-white">
        <h1 className="text-3xl font-bold text-center text-yellow-400 mb-6 drop-shadow-lg">📖 Data Mahasiswa 📖</h1>
  
        {/* Tampilan Desktop - Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse border border-gray-600 shadow-lg">
            <thead className="bg-gray-700 text-white">
              <tr>
                <th className="border border-gray-600 px-4 py-2">No</th>
                <th className="border border-gray-600 px-4 py-2">NIM</th>
                <th className="border border-gray-600 px-4 py-2">Nama</th>
                <th className="border border-gray-600 px-4 py-2">Gender</th>
                <th className="border border-gray-600 px-4 py-2">Prodi</th>
                <th className="border border-gray-600 px-4 py-2">Kelas</th>
                <th className="border border-gray-600 px-4 py-2">Semester</th>
                <th className="border border-gray-600 px-4 py-2">Alamat</th>
                <th className="border border-gray-600 px-4 py-2">Hobby</th>
                <th className="border border-gray-600 px-4 py-2">Cita-cita</th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 text-center">
              {students.map((student) => (
                <tr key={student.nim} className="hover:bg-gray-700 transition-all">
                  <td className="border border-gray-600 px-4 py-2">{student.no}</td>
                  <td className="border border-gray-600 px-4 py-2">{student.nim}</td>
                  <td className="border border-gray-600 px-4 py-2">{student.nama}</td>
                  <td className="border border-gray-600 px-4 py-2">{student.gender}</td>
                  <td className="border border-gray-600 px-4 py-2">{student.prodi}</td>
                  <td className="border border-gray-600 px-4 py-2">{student.kelas}</td>
                  <td className="border border-gray-600 px-4 py-2">{student.semester}</td>
                  <td className="border border-gray-600 px-4 py-2">{student.alamat}</td>
                  <td className="border border-gray-600 px-4 py-2">{student.hobby}</td>
                  <td className="border border-gray-600 px-4 py-2">{student.citaCita}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  
        {/* Tampilan Mobile - Grid System */}
        <div className="md:hidden space-y-6">
          {students.map((student) => (
            <div 
              key={student.nim} 
              className="p-5 border border-gray-600 rounded-lg bg-gray-800 shadow-md backdrop-blur-md transition-all duration-300 hover:bg-gray-700 hover:shadow-xl"
            >
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="font-semibold text-yellow-400">No</div> <div>{student.no}</div>
                <div className="font-semibold text-yellow-400">NIM</div> <div>{student.nim}</div>
                <div className="font-semibold text-yellow-400">Nama</div> <div>{student.nama}</div>
                <div className="font-semibold text-yellow-400">Gender</div> <div>{student.gender}</div>
                <div className="font-semibold text-yellow-400">Prodi</div> <div>{student.prodi}</div>
                <div className="font-semibold text-yellow-400">Kelas</div> <div>{student.kelas}</div>
                <div className="font-semibold text-yellow-400">Semester</div> <div>{student.semester}</div>
                <div className="font-semibold text-yellow-400">Alamat</div> <div>{student.alamat}</div>
                <div className="font-semibold text-yellow-400">Hobby</div> <div>{student.hobby}</div>
                <div className="font-semibold text-yellow-400">Cita-cita</div> <div>{student.citaCita}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  