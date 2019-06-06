// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
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
import { list } from '../api/actions/query'
import Body from '../../common/Body'
import NavigationTopInner from '../../common/NavigationTopInner'
import EmptyMessage from '../../common/EmptyMessage'
import Item from '../Item'

// Component
class List extends PureComponent {

  componentDidMount() {
    this.#refresh()
  }

  #refresh = () => {
    const { dispatch } = this.props

    dispatch(list())
  }

  onClickCreate = () => {
    this.#navigateTo(routesNote.create.name)
  }

  #navigateTo = (screen) => {
    const { navigation } = this.props

    navigation.navigate(screen)
  }

  onSelect = ({ _id }) => () => {
    const { navigation } = this.props

    navigation.navigate(routesNote.detail.name, { noteId: _id })
  }

  render() {
    const { notes: { isLoading, list } } = this.props

    return (
      <Body>
        {/* Navigation */}
        <NavigationTopInner
          title={translate.t('note.list.title')}
          subTitle={translate.t('note.list.subTitle')}
          rightContent={
            <Button
              title={translate.t('common.button.create')}
              onPress={this.onClickCreate}
              theme={'primary'}
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
            renderItem={({ item }) => <Item item={item} onSelect={this.onSelect} />}
            ItemSeparatorComponent={() => <DividerItem />}
            refreshControl={
              <RefreshControl
                refreshing={isLoading}
                onRefresh={this.#refresh}
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
}

// Component Properties
List.propTypes = {
  notes: PropTypes.object.isRequired
}

// Component State
function listState(state) {
  return {
    notes: state.notes
  }
}

export default connect(listState)(List)
