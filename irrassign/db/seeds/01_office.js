
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('office').del()
    .then(function () {
      // Inserts seed entries
      return knex('office').insert([
        {office_name: 'NLD (Shwe Pyi Thar)', address: 'No.(17), Minn Street, Shwe Pyi Thar', village: 'Zee Gone', village_tracts: 'Zee Peni', wards: 'Van Dar', town: 'Yangon', township: 'ShwePyiThar', districts: 'Northern',states: 'Yangon', po_no: 12, ph_no1: 09793823445, ph_no2: 09973434878,email: 'nldspt@gov.mm', building_type: 'RC floor', own_rental: 1 },
        {office_name: 'NLD (Insein)', address: 'No.(201), MinGyi Street, Insein', village: 'Ywar Ma', village_tracts: 'Ywar Ma', wards: 'Lann', town: 'Yangon', township: 'Insein', districts: 'Northern',states: 'Yangon', po_no: 17, ph_no1: 254180237, ph_no2: 09250192305,email: 'nldins@gov.mm', building_type: 'RC floor', own_rental: 1 },
        {office_name: 'NLD (Botataung)', address: 'No.(17), Minn Street, Botataung', village: 'Zee Gone', village_tracts: 'Zee Peni', wards: 'Van Dar', town: 'Yangon', township: 'Botataung', districts: 'Eastern',states: 'Yangon', po_no: 19, ph_no1: 09793823445, ph_no2: 09973434878, email: 'nldbth@gov.mm', building_type: 'RC floor', own_rental: 1 },
        {office_name: 'NLD (Tharketa)', address: 'No.(376), Tin Myint Street, Tharketa', village: 'Anawmar', village_tracts: 'Anawmar', wards: 'Var Dan', town: 'Yangon', township: 'Thaketa', districts: 'Eastern',states: 'Yangon', po_no: 32, ph_no1: 09793823445, ph_no2: 09973434878 ,email: 'nldpzt@gov.mm', building_type: 'RC floor', own_rental: 0 },
        {office_name: 'NLD (Thingangyun)', address: 'No.(17), Minn Street, Thingangyun', village: 'Zee Gone', village_tracts: 'Zee Peni', wards: 'Van Dar', town: 'Yangon', township: 'Thingangyun', districts: 'Western',states: 'Yangon', po_no: 43, ph_no1: 09793823445, ph_no2: 09973434878,email: 'nldtgk@gov.mm', building_type: 'RC floor', own_rental: 0 },
        {office_name: 'NLD (Kamayut)', address: 'No.(17), Minn Street, Kamayut', village: 'Zee Gone', village_tracts: 'Zee Peni', wards: 'Van Dar', town: 'Yangon', township: 'Kamayut', districts: 'Western',states: 'Yangon', po_no: 29, ph_no1: 09793823445, ph_no2: 09973434878,email: 'nldkmy@gov.mm', building_type: 'RC floor', own_rental: 1 },
        {office_name: 'NLD (Pabedan)', address: 'No.(17), Minn Street, Pabedan', village: 'Zee Gone', village_tracts: 'Zee Peni', wards: 'Van Dar', town: 'Yangon', township: 'Pabedan', districts: 'Western',states: 'Yangon', po_no: 34, ph_no1: 09793823445, ph_no2: 09973434878,email: 'nldbbt@gov.mm', building_type: 'RC floor', own_rental: 0 },
        {office_name: 'NLD (Bahan)', address: 'No.(17), Minn Street, Bahan', village: 'Zee Gone', village_tracts: 'Zee Peni', wards: 'Van Dar', town: 'Yangon', township: 'Bahan', districts: 'Western',states: 'Yangon', po_no: 67, ph_no1: 09793823445, ph_no2: 09973434878,email: 'nldbh@gov.mm', building_type: 'RC floor', own_rental: 0 },
        {office_name: 'NLD (Latha)', address: 'No.(17), Minn Street, Latha', village: 'Zee Gone', village_tracts: 'Zee Peni', wards: 'Van Dar', town: 'Yangon', township: 'Latha', districts: 'Western',states: 'Yangon', po_no: 97, ph_no1: 09793823445, ph_no2: 09973434878,email: 'nldlt@gov.mm', building_type: 'RC floor', own_rental: 1 },
        {office_name: 'NLD (Sanchaung)', address: 'No.(17), Minn Street, Sanchaung', village: 'Zee Gone', village_tracts: 'Zee Peni', wards: 'Van Dar', town: 'Yangon', township: 'Sanchaung', districts: 'Western',states: 'Yangon', po_no: 8, ph_no1: 09793823445, ph_no2: 09973434878,email: 'nldsc@gov.mm', building_type: 'RC floor', own_rental: 0 },
        
      ]);
    });
};
