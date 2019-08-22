class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.text :question, null: false
      t.string :dimension, null: false
      t.integer :direction, null: false
      t.string :meaning, null: false
      t.timestamps
    end
    add_index :questions, :question, unique: true
  end
end
