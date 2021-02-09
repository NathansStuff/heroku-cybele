class CreateAnimals < ActiveRecord::Migration[6.0]
  def change
    create_table :animals do |t|
      t.string :name
      t.integer :age
      t.string :breed
      t.boolean :microchip
      t.integer :microchip_number
      t.string :notes
      t.string :photo

      t.timestamps
    end
  end
end
