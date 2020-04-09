class EnglishWordsController < ApplicationController
  def index
    @english_words = EnglishWord.all 
    # @english_word = EnglishWord.find(params[:id])

  end

  def new
    @english_word = EnglishWord.new
  end
  
  def create
    EnglishWord.create(key_word_params) #モデル名はキャメルケースで記入
    redirect_to new_english_word_path   # 保存後にnewページを再度呼び出し
  end

  def show
    @english_words = EnglishWord.find(params[:id])
  end

  def edit
    @english_word = EnglishWord.find(params[:id])
  end

  def update
    @english_word = EnglishWord.find(params[:id])
    @english_word.update(key_word_params)
    # redirect_to edit_english_word_path(@english_word.id) editページに遷移
    redirect_to root_path #rootに遷移
  end

  def destroy
    english_word = EnglishWord.find(params[:id])
    english_word.destroy
    redirect_to root_path
  end

  def quiz
    @quizzes = EnglishWord.all
  end  

  private
  def key_word_params
    params.require(:english_word).permit(:key_word,:key_word_kana,:grammar).merge(user_id: current_user.id)
  end

end
