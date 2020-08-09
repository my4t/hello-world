
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('district').del()
    .then(function () {
      // Inserts seed entries
      return knex('district').insert([
        {district_id: 1, district_code: '012', district_name: 'Eastern', state_region: 'Yangon', remark: 'Shwedagon Pagoda'},
        {district_id: 3, district_code: '013', district_name: 'Western', state_region: 'Yangon', remark: 'Shwedagon Pagoda'},
        {district_id: 5, district_code: '014', district_name: 'Northern', state_region: 'Yangon', remark: 'Shwedagon Pagoda'},
        {district_id: 2, district_code: '015', district_name: 'Eastern', state_region: 'Yangon', remark: 'Shwedagon Pagoda'},
        {district_id: 1, district_code: '016', district_name: 'Southern', state_region: 'Yangon', remark: 'Shwedagon Pagoda'},
        {district_id: 3, district_code: '017', district_name: 'Eastern', state_region: 'Yangon', remark: 'Shwedagon Pagoda'},
        {district_id: 1, district_code: '018', district_name: 'Western', state_region: 'Yangon', remark: 'Shwedagon Pagoda'},
        {district_id: 2, district_code: '019', district_name: 'Western', state_region: 'Yangon', remark: 'Shwedagon Pagoda'},
        {district_id: 1, district_code: '020', district_name: 'Eastern', state_region: 'Yangon', remark: 'Shwedagon Pagoda'},
        {district_id: 1, district_code: '011', district_name: 'Northern', state_region: 'Yangon', remark: 'Shwedagon Pagoda'},
      ]);
    });
};
