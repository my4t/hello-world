
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('state').del()
    .then(function () {
      // Inserts seed entries
      return knex('state').insert([
        {state_id: 1, state_code: '001', state_region: 'Yangon', remark: 'Shwedagon Pagoda'},
        {state_id: 3, state_code: '002', state_region: 'Mandalay', remark: 'Shwedagon Pagoda'},
        {state_id: 5, state_code: '003', state_region: 'Sagaing', remark: 'Shwedagon Pagoda'},
        {state_id: 2, state_code: '004', state_region: 'Tanintharyi', remark: 'Shwedagon Pagoda'},
        {state_id: 5, state_code: '005', state_region: 'Ayeyarwady', remark: 'Shwedagon Pagoda'},
        {state_id: 1, state_code: '006', state_region: 'Yakhine', remark: 'Shwedagon Pagoda'},
        {state_id: 1, state_code: '007', state_region: 'Chin', remark: 'Shwedagon Pagoda'},
        {state_id: 2, state_code: '008', state_region: 'Kachin', remark: 'Shwedagon Pagoda'},
        {state_id: 3, state_code: '009', state_region: 'Pago', remark: 'Shwedagon Pagoda'},
        {state_id: 1, state_code: '010', state_region: 'Mon', remark: 'Shwedagon Pagoda'},
      ]);
    });
};
