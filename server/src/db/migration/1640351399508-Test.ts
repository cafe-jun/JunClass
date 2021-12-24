import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class Test1640351399508 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'question',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true
          },
          {
            name: 'name',
            type: 'string'
          }
        ]
      })
    );
    await queryRunner.createIndex(
      'question',
      new TableIndex({
        name: 'IDX_QUESTION_NAME',
        columnNames: ['name']
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
