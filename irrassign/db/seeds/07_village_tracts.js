
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('village_tracts').del()
    .then(function () {
      // Inserts seed entries
      return knex('village_tracts').insert([
        {village_tracts_id: 1, village_tracts_code: '001', village_tracts_name: 'VanDar', state_region: 'Yangon', district: 'Western', township: 'Yangon', remark: 'Shwedagon Pagoda'},
        {village_tracts_id: 1, village_tracts_code: '002', village_tracts_name: 'VanDar', state_region: 'Yangon', district: 'Western', township: 'Yangon', remark: 'Shwedagon Pagoda'},
        {village_tracts_id: 2, village_tracts_code: '003', village_tracts_name: 'VanDar', state_region: 'Yangon', district: 'Western', township: 'Yangon', remark: 'Shwedagon Pagoda'},
        {village_tracts_id: 1, village_tracts_code: '004', village_tracts_name: 'VanDar', state_region: 'Yangon', district: 'Western', township: 'Yangon', remark: 'Shwedagon Pagoda'},
        {village_tracts_id: 3, village_tracts_code: '005', village_tracts_name: 'VanDar', state_region: 'Yangon', district: 'Western', township: 'Yangon', remark: 'Shwedagon Pagoda'},
        {village_tracts_id: 1, village_tracts_code: '006', village_tracts_name: 'VanDar', state_region: 'Yangon', district: 'Western', township: 'Yangon', remark: 'Shwedagon Pagoda'},
        {village_tracts_id: 5, village_tracts_code: '007', village_tracts_name: 'VanDar', state_region: 'Yangon', district: 'Western', township: 'Yangon', remark: 'Shwedagon Pagoda'},
        {village_tracts_id: 1, village_tracts_code: '008', village_tracts_name: 'VanDar', state_region: 'Yangon', district: 'Western', township: 'Yangon', remark: 'Shwedagon Pagoda'},
        {village_tracts_id: 4, village_tracts_code: '009', village_tracts_name: 'VanDar', state_region: 'Yangon', district: 'Western', township: 'Yangon', remark: 'Shwedagon Pagoda'},
      ]);
    });
};
