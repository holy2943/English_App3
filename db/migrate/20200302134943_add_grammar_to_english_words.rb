class AddGrammarToEnglishWords < ActiveRecord::Migration[5.2]
  def change
    add_column :english_words, :grammar, :string
  end
end
