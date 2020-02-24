class CreateEnglishWords < ActiveRecord::Migration[5.2]
  def change
    create_table :english_words do |t|
      t.text  :key_word
      t.timestamps
    end
  end
end
