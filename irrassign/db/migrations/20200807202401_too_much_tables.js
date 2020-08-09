
const { table } = require("../knex");

exports.up = function(knex) {
    return knex.schema.createTable('office', function(table) {
        table.increments('office_id').primary();
        table.specificType('office_name', 'varchar(50)').notNullable();
        table.specificType('address', 'varchar(100)').notNullable();
        table.specificType('village', 'varchar(45)').notNullable();
        table.specificType('village_tracts', 'varchar(45)').notNullable();
        table.specificType('wards', 'varchar(45)').notNullable();
        table.specificType('town', 'varchar(45)').notNullable();
        table.specificType('township', 'varchar(45)').notNullable();
        table.specificType('districts', 'varchar(45)').notNullable();
        table.specificType('states', 'varchar(45)').notNullable();
        table.integer('po_no').notNullable();
        table.integer('ph_no1').notNullable();
        table.integer('ph_no2').nullable();
        table.specificType('email', 'varchar(45)').notNullable();
        table.specificType('building_type', 'varchar(45)').notNullable();
        table.specificType('own_rental', 'tinyint(1)');
    })

 .createTable('state', function(table) {
    table.increments();
    table.specificType('state_code', 'varchar(50)').notNullable();
    table.specificType('state_region', 'varchar(45)').notNullable();
    table.specificType('remark', 'varchar(100)').notNullable();

    table.integer('state_id').unsigned().references('office_id').inTable('office'); 
})

.createTable('district', function(table) {
    table.increments('id').primary();
    table.specificType('district_code', 'varchar(30)').notNullable();
    table.specificType('district_name', 'varchar(45)').notNullable();
    table.specificType('state_region', 'varchar(45)').notNullable();
    table.specificType('remark', 'varchar(45)').notNullable();
    table.integer('district_id').unsigned().references('state_id, office_id').inTable('state, office');
})

.createTable('township', function(table) {
    table.increments().primary();
    table.specificType('township_code', 'varchar(30)').notNullable();
    table.specificType('township_ame', 'varchar(45)').notNullable();
    table.specificType('state_region', 'varchar(45)').notNullable();
    table.specificType('district', 'varchar(45)').notNullable();
    table.specificType('remark', 'varchar(45)').notNullable();
    table.integer('township_id').unsigned().references('state.state_id, office.office_id, district.district_id');
})

.createTable('towns', function(table) {
    table.increments().primary();
    table.specificType('towns_code', 'varchar(30)').notNullable();
    table.specificType('towns_name', 'varchar(45)').notNullable();
    table.specificType('state_region', 'varchar(45)').notNullable();
    table.specificType('district', 'varchar(45)').notNullable();
    table.specificType('township', 'varchar(45)').notNullable();
    table.specificType('remark', 'varchar(45)').notNullable();
    table.integer('towns_id').unsigned().references('state.state_id, township.township_id, district.district_id');
})

.createTable('wards', function(table) {
    table.increments().primary();
    table.specificType('wards_code', 'varchar(30)').notNullable();
    table.specificType('wards_name', 'varchar(45)').notNullable();
    table.specificType('state_region', 'varchar(45)').notNullable();
    table.specificType('district', 'varchar(45)').notNullable();
    table.specificType('township', 'varchar(45)').notNullable();
    table.specificType('towns', 'varchar(45)').notNullable();
    table.specificType('remark', 'varchar(45)').notNullable();
    table.integer('wards_id').unsigned().references('state.state_id, township.township_id, district.district_id, towns.towns_id, office.office_id');
})

.createTable('village_tracts', function(table) {
    table.increments().primary();
    table.specificType('village_tracts_code', 'varchar(30)').notNullable();
    table.specificType('village_tracts_name', 'varchar(45)').notNullable();
    table.specificType('state_region', 'varchar(45)').notNullable();
    table.specificType('district', 'varchar(45)').notNullable();
    table.specificType('township', 'varchar(45)').notNullable();
    table.specificType('remark', 'varchar(45)').notNullable();
    table.integer('village_tracts_id').unsigned().references('state.state_id, township.township_id, district.district_id, office.office_id');
})

.createTable('village', function(table) {
    table.increments().primary();
    table.specificType('village_code', 'varchar(30)').notNullable();
    table.specificType('village_name', 'varchar(45)').notNullable();
    table.decimal('latitude').notNullable();
    table.decimal('longitube').notNullable();
    table.specificType('state_region', 'varchar(45)').notNullable();
    table.specificType('district', 'varchar(45)').notNullable();
    table.specificType('township', 'varchar(45)').notNullable();
    table.specificType('village_track', 'varchar(45)').notNullable();
    table.specificType('remark', 'varchar(45)').notNullable();
    table.integer('village_id').unsigned().references('village_tracts.village_tracts_id, state.state_id, township.township_id, district.district_id, office.office_id');

})


};

exports.down = function(knex) {
    return knex.schema.dropTable('village').dropTable('village_tracts').dropTable('wards').dropTable('towns').dropTable('township').dropTable('district').dropTable('state').dropTable('office');


};
