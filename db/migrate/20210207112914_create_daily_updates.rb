class CreateDailyUpdates < ActiveRecord::Migration[6.0]
  def change
    create_table :daily_updates do |t|
      t.float :weight
      t.string :drank_water
      t.string :boolean
      t.boolean :ate_food
      t.string :notes
      t.belongs_to :animal, null: false, foreign_key: true
      
      t.timestamps
    end
  end
end
