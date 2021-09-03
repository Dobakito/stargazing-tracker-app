class CreateMessiers < ActiveRecord::Migration[6.1]
  def change
    create_table :messiers do |t|
      t.string :m_number
      t.string :common_name
      t.string :description
      t.string :constellation
      t.string :obj_type
      t.integer :magnitude
      t.string :dec
      t.string :ra
      t.string :sky_pic
      t.string :pretty_pic

      t.timestamps
    end
  end
end
