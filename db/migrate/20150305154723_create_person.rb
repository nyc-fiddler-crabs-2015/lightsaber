class CreatePerson < ActiveRecord::Migration
  def change
    create_table :persons do |t|
      t.string :first
      t.string :last
      t.integer :age
      t.string :eyecolor

      t.timestamps
    end
  end
end
