class CreateTechmentors < ActiveRecord::Migration[7.0]
  def change
    create_table :techmentors do |t|
      t.string :name
      t.string :email
      t.string :devskills

      t.timestamps
    end
  end
end
