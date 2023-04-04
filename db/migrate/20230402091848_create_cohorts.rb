class CreateCohorts < ActiveRecord::Migration[7.0]
  def change
    create_table :cohorts do |t|
      t.string :c_name
      t.string :techmentor
      t.string :c_email
      t.string :c_avatar

      t.timestamps
    end
  end
end
