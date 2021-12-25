import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserMigration1640404316286 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    console.log('test');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    console.log('test');
  }
}
