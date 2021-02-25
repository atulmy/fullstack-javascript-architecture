// Imports
import React, {useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {View, ScrollView, RefreshControl} from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import moment from 'moment'

// UI Imports
import Typography from '../../../ui/Typography'
import {grey5} from '../../../ui/common/colors'
import styles from './styles'

// App Imports
import params from '../../../setup/config/params'
import {routesNote} from '../../../setup/routes/postLogin/note'
import translate from '../../../setup/translate'
import {messageShow} from '../../common/api/actions'
import {NOTE_DETAIL_CACHE} from '../api/actions/cache-keys'
import {list, detail} from '../api/actions/query'
import {remove} from '../api/actions/mutation'
import NavigationTopInner from '../../common/NavigationTopInner'
import ActionBack from '../../common/NavigationTop/ActionBack'
import Button from '../../../ui/button/Button'
import Body from '../../common/Body'

// Component
const Detail = ({navigation}) => {
  // state
  const [isRefreshing, isRefreshingToggle] = useState(false)
  const [isDeleting, isDeletingToggle] = useState(false)
  const [note, setNote] = useState(null)
  const dispatch = useDispatch()

  // on component load
  useEffect(() => {
    const noteId = navigation.getParam('noteId')

    refresh(noteId)
  }, [])

  // refresh
  const refresh = async (noteId) => {
    if (noteId) {
      const CACHE_KEY = NOTE_DETAIL_CACHE + noteId

      const note = JSON.parse(await AsyncStorage.getItem(CACHE_KEY))

      if (note) {
        setNote(note)
      } else {
        isRefreshingToggle(true)
      }

      try {
        const {data} = await detail({noteId})

        if (data.success) {
          const note = data.data

          setNote(note)

          await AsyncStorage.setItem(CACHE_KEY, JSON.stringify(note))
        }
      } catch (error) {
        dispatch(
          messageShow({
            success: false,
            message: translate.t('common.error.default'),
          }),
        )
      } finally {
        isRefreshingToggle(false)
      }
    } else {
      navigation.navigate(routesNote.list.name)
    }
  }

  // on delete
  const onDelete = async () => {
    const noteId = navigation.getParam('noteId')

    isDeletingToggle(true)

    try {
      const {data} = await remove({noteId})

      isDeletingToggle(false)

      dispatch(messageShow({success: data.success, message: data.message}))

      if (data.success) {
        dispatch(list(false))

        navigation.navigate(routesNote.list.name)
      }
    } catch (error) {
      isDeletingToggle(false)

      dispatch(
        messageShow({
          success: false,
          message: translate.t('common.error.default'),
        }),
      )
    }
  }

  // render
  return (
    <Body>
      <View style={styles.container}>
        {/* Navigation */}
        <NavigationTopInner
          title={translate.t('note.detail.title')}
          subTitle={translate.t('note.detail.subTitle', {
            date:
              detail && detail._id
                ? moment(detail.createdAt).format(
                    params.common.formats.dateTime,
                  )
                : '',
          })}
          leftIcon={<ActionBack />}
          rightContent={
            <Button
              title={translate.t('common.button.delete')}
              theme='outlined'
              onPress={onDelete}
              disabled={isDeleting}
              shadow={false}
              condensed
            />
          }
        />

        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={refresh}
              tintColor={grey5}
            />
          }
          style={styles.container}>
          <View style={styles.content}>
            {note && note._id && <Typography size='h4'>{note.note}</Typography>}
          </View>
        </ScrollView>
      </View>
    </Body>
  )
}

export default Detail
