// Imports
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, RefreshControl } from 'react-native'
import { FlatList } from 'react-navigation'

// UI Imports
import { grey5 } from '../../../ui/common/colors'
import Button from '../../../ui/button/Button'
import DividerItem from '../../../ui/divider/Item'
import styles from './styles'

// App Imports
import translate from '../../../setup/translate'
import { routesNote } from '../../../setup/routes/postLogin/note'
import { list as getList } from '../api/actions/query'
import Body from '../../common/Body'
import NavigationTopInner from '../../common/NavigationTopInner'
import EmptyMessage from '../../common/EmptyMessage'
import Item from '../Item'

// Component
const List = ({ navigation }) => {
  // state
  const { isLoading, list } = useSelector(state => state.notes)
  const dispatch = useDispatch()

  // on component load
  useEffect(() => {
    refresh()
  }, [])

  // refresh
  const refresh = () => {
    dispatch(getList())
  }

  // on click create
  const onClickCreate = () => {
    navigation.navigate(routesNote.create.name)
  }

  // on select
  const onSelect = ({ _id }) => () => {
    navigation.navigate(routesNote.detail.name, { noteId: _id })
  }

  return (
    <Body>
      {/* Navigation */}
      <NavigationTopInner
        title={translate.t('note.list.title')}
        subTitle={translate.t('note.list.subTitle')}
        rightContent={
          <Button
            title={translate.t('common.button.create')}
            onPress={onClickCreate}
            theme='primary'
            style={styles.navigationButton}
            shadow={false}
            condensed
          />
        }
      />

      {/* List */}
      <View style={styles.container}>
        <FlatList
          data={list}
          keyExtractor={item => item._id}
          renderItem={({ item }) => <Item item={item} onSelect={onSelect} />}
          ItemSeparatorComponent={() => <DividerItem />}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={refresh}
              tintColor={grey5}
            />
          }
          ListEmptyComponent={() => <EmptyMessage message={translate.t('note.list.empty')} />}
          refreshing={isLoading}
        />
      </View>
    </Body>
  )
}

export default List
