
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('township').del()
    .then(function () {
      // Inserts seed entries
      return knex('township').insert([
        {township_id: 2, township_code: '001', township_ame: 'Tharketa', state_region: 'Yangon', district: 'Eastern', remark: 'Shwedagon Pagoda'},
        {township_id: 4, township_code: '002', township_ame: 'Mayangone', state_region: 'Yangon', district: 'Eastern', remark: 'Shwedagon Pagoda'},
        {township_id: 2, township_code: '003', township_ame: 'ShwePyiThar', state_region: 'Yangon', district: 'Eastern', remark: 'Shwedagon Pagoda'},
        {township_id: 2, township_code: '004', township_ame: 'Bahan', state_region: 'Yangon', district: 'Eastern', remark: 'Shwedagon Pagoda'},
        {township_id: 3, township_code: '005', township_ame: 'Yankin', state_region: 'Yangon', district: 'Eastern', remark: 'Shwedagon Pagoda'},
        {township_id: 5, township_code: '006', township_ame: 'Tharketa', state_region: 'Yangon', district: 'Eastern', remark: 'Shwedagon Pagoda'},
        {township_id: 2, township_code: '007', township_ame: 'Tarmwe', state_region: 'Yangon', district: 'Eastern', remark: 'Shwedagon Pagoda'},
        {township_id: 1, township_code: '008', township_ame: 'Insein', state_region: 'Yangon', district: 'Eastern', remark: 'Shwedagon Pagoda'},
        {township_id: 2, township_code: '009', township_ame: 'Kamayut', state_region: 'Yangon', district: 'Eastern', remark: 'Shwedagon Pagoda'},
        {township_id: 1, township_code: '010', township_ame: 'Tharketa', state_region: 'Yangon', district: 'Eastern', remark: 'Shwedagon Pagoda'},
      ]);
    });
};
