class CreateSmsMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :sms_messages do |t|
      t.string :mobile_number
      t.string :message

      t.timestamps
    end
  end
end
