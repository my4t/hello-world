
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('towns').del()
    .then(function () {
      // Inserts seed entries
      return knex('towns').insert([
        {towns_id: 1, towns_code: '001', towns_name: 'Tarmwe', state_region: 'Yangon', district: 'Western', remark: 'Shwedagon Pagoda'},
        {towns_id: 2, towns_code: '002', towns_name: 'Tharketa', state_region: 'Yangon', district: 'Western', remark: 'Shwedagon Pagoda'},
        {towns_id: 1, towns_code: '003', towns_name: 'Yankin', state_region: 'Yangon', district: 'Western', remark: 'Shwedagon Pagoda'},
        {towns_id: 1, towns_code: '004', towns_name: 'Kamayut', state_region: 'Yangon', district: 'Eastern', remark: 'Shwedagon Pagoda'},
        {towns_id: 5, towns_code: '005', towns_name: 'Botahtaung', state_region: 'Yangon', district: 'Western', remark: 'Shwedagon Pagoda'},
        {towns_id: 6, towns_code: '006', towns_name: 'Insein', state_region: 'Yangon', district: 'Eastern', remark: 'Shwedagon Pagoda'},
        {towns_id: 1, towns_code: '007', towns_name: 'ShwePyiThar', state_region: 'Yangon', district: 'Western', remark: 'Shwedagon Pagoda'},
        {towns_id: 3, towns_code: '008', towns_name: 'Tarmwe', state_region: 'Yangon', district: 'Northern', remark: 'Shwedagon Pagoda'},
        {towns_id: 1, towns_code: '009', towns_name: 'Hlaing', state_region: 'Yangon', district: 'Western', remark: 'Shwedagon Pagoda'},
        {towns_id: 7, towns_code: '010', towns_name: 'Tarmwe', state_region: 'Yangon', district: 'Western', remark: 'Shwedagon Pagoda'},
      ]);
    });
};
