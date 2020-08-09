
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('wards').del()
    .then(function () {
      // Inserts seed entries
      return knex('wards').insert([
        {wards_id: 1, wards_code: '001', wards_name: 'VanDar', state_region: 'Yangon', district: 'Western', township: 'Tharketa', towns: 'Yangon', remark: 'Shwedagon Pagoda'},
        {wards_id: 3, wards_code: '002', wards_name: 'VanDar', state_region: 'Yangon', district: 'Western', township: 'Tharketa', towns: 'Yangon', remark: 'Shwedagon Pagoda'},
        {wards_id: 1, wards_code: '003', wards_name: 'VanDar', state_region: 'Yangon', district: 'Western', township: 'Tharketa', towns: 'Yangon', remark: 'Shwedagon Pagoda'},
        {wards_id: 1, wards_code: '004', wards_name: 'VanDar', state_region: 'Yangon', district: 'Western', township: 'Tharketa', towns: 'Yangon', remark: 'Shwedagon Pagoda'},
        {wards_id: 3, wards_code: '005', wards_name: 'VanDar', state_region: 'Yangon', district: 'Western', township: 'Tharketa', towns: 'Yangon', remark: 'Shwedagon Pagoda'},
        {wards_id: 2, wards_code: '006', wards_name: 'VanDar', state_region: 'Yangon', district: 'Western', township: 'Tharketa', towns: 'Yangon', remark: 'Shwedagon Pagoda'},
        {wards_id: 4, wards_code: '007', wards_name: 'VanDar', state_region: 'Yangon', district: 'Western', township: 'Tharketa', towns: 'Yangon', remark: 'Shwedagon Pagoda'},
        {wards_id: 1, wards_code: '008', wards_name: 'VanDar', state_region: 'Yangon', district: 'Western', township: 'Tharketa', towns: 'Yangon', remark: 'Shwedagon Pagoda'},
        {wards_id: 2, wards_code: '009', wards_name: 'VanDar', state_region: 'Yangon', district: 'Western', township: 'Tharketa', towns: 'Yangon', remark: 'Shwedagon Pagoda'},

      ]);
    });
};
