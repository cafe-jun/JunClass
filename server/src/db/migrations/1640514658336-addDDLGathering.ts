import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey
} from 'typeorm';

export class addDDLGathering1640514658336 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'gathering',
      new TableColumn({
        name: 'ownerId',
        type: 'int'
      })
    );
    await queryRunner.createForeignKey(
      'gathering',
      new TableForeignKey({
        columnNames: ['ownerId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('gathering');
    const foreignKey = table.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('ownerId') !== -1
    );
    console.log(foreignKey);
    await queryRunner.dropForeignKey('gathering', foreignKey);
    await queryRunner.dropColumn(
      'gathering',
      new TableColumn({
        name: 'ownerId',
        type: 'int'
      })
    );
  }
}
