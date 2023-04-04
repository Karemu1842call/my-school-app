class AddMyavatarToTechmentor < ActiveRecord::Migration[7.0]
  def change
    add_column :techmentors, :myavatar, :string
  end
end
