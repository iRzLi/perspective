# == Schema Information
#
# Table name: questions
#
#  id         :integer          not null, primary key
#  question   :text             not null
#  dimension  :string           not null
#  direction  :integer          not null
#  meaning    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Question < ApplicationRecord
    validates :question, :dimension, :direction, :meaning, presence: true
    validates :question, uniqueness: true

    has_many :responses,
    primary_key: :id,
    foreign_key: :question_id,
    class_name: :Response,
    dependent: :destroy
    
end
