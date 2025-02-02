import type {
  CreationOptional,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize'
import { Model, DataTypes } from 'sequelize'
import { sequelize } from './index'

export class UnsubscribeList extends Model<
  InferAttributes<UnsubscribeList>,
  InferCreationAttributes<UnsubscribeList>
> {
  declare lockAddress: string
  declare userAddress: string
  declare network: number
  declare createdAt: CreationOptional<Date>
  declare updatedAt: CreationOptional<Date>
}

UnsubscribeList.init(
  {
    lockAddress: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    userAddress: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    network: {
      allowNull: false,
      type: 'pg_chain_id',
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    indexes: [
      {
        name: 'lock_user_network',
        fields: ['lockAddress', 'userAddress', 'network'],
        unique: true,
      },
    ],
  }
)
