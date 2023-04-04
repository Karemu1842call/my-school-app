class CreateStudents < ActiveRecord::Migration[7.0]
  def change
    create_table :students do |t|
      t.string :s_name
      t.string :s_email
      t.string :s_avatar
      t.string :s_telno
      t.belongs_to :school, null: false, foreign_key: true
      t.belongs_to :cohort, null: false, foreign_key: true

      t.timestamps
    end
  end
end
