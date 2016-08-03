class CreateTrips < ActiveRecord::Migration[5.0]
  def change
    create_table :trips do |t|
      t.string :country
      t.string :region
      t.string :capital
      t.string :image

      t.timestamps
    end
  end
end
