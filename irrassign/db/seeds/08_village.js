
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('village').del()
    .then(function () {
      // Inserts seed entries
      return knex('village').insert([
        {village_id: 1, village_code: '001', village_name: 'Vandar', latitude: 25.40, longitude: 69.53, state_region: 'Yangon', district: 'Eastern', township: 'Tharketa', village_track: '001', remark: 'Shwedagon Pagoda'},
        {village_id: 2, village_code: '002', village_name: 'Vandar', latitude: 25.40, longitude: 69.53, state_region: 'Yangon', district: 'Eastern', township: 'Tharketa', village_track: '001', remark: 'Shwedagon Pagoda'},
        {village_id: 1, village_code: '003', village_name: 'Vandar', latitude: 25.40, longitude: 69.53, state_region: 'Yangon', district: 'Eastern', township: 'Tharketa', village_track: '001', remark: 'Shwedagon Pagoda'},
        {village_id: 3, village_code: '004', village_name: 'Vandar', latitude: 25.40, longitude: 69.53, state_region: 'Yangon', district: 'Eastern', township: 'Tharketa', village_track: '001', remark: 'Shwedagon Pagoda'},
        {village_id: 1, village_code: '005', village_name: 'Vandar', latitude: 25.40, longitude: 69.53, state_region: 'Yangon', district: 'Eastern', township: 'Tharketa', village_track: '001', remark: 'Shwedagon Pagoda'},
        {village_id: 6, village_code: '006', village_name: 'Vandar', latitude: 25.40, longitude: 69.53, state_region: 'Yangon', district: 'Eastern', township: 'Tharketa', village_track: '001', remark: 'Shwedagon Pagoda'},
        {village_id: 1, village_code: '007', village_name: 'Vandar', latitude: 25.40, longitude: 69.53, state_region: 'Yangon', district: 'Eastern', township: 'Tharketa', village_track: '001', remark: 'Shwedagon Pagoda'},
        {village_id: 1, village_code: '008', village_name: 'Vandar', latitude: 25.40, longitude: 69.53, state_region: 'Yangon', district: 'Eastern', township: 'Tharketa', village_track: '001', remark: 'Shwedagon Pagoda'},
        {village_id: 4, village_code: '009', village_name: 'Vandar', latitude: 25.40, longitude: 69.53, state_region: 'Yangon', district: 'Eastern', township: 'Tharketa', village_track: '001', remark: 'Shwedagon Pagoda'},
        {village_id: 1, village_code: '010', village_name: 'Vandar', latitude: 25.40, longitude: 69.53, state_region: 'Yangon', district: 'Eastern', township: 'Tharketa', village_track: '001', remark: 'Shwedagon Pagoda'},
      ]);
    });
};
