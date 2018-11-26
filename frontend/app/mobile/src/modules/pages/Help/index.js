// Imports
import React, { PureComponent } from 'react'
import { View, ScrollView } from 'react-native'
import { web } from 'react-native-communications'

// UI Imports
import { blockMargin } from '../../../ui/common/responsive'
import Typography from '../../../ui/Typography'
import Button from '../../../ui/button/Button'
import styles from './styles'

// App Imports
import { LANDING_URL } from '../../../setup/config/env'
import params from '../../../setup/config/params'
import translate from '../../../setup/translate'
import Body from '../../common/Body'
import NavigationTopInner from '../../common/NavigationTopInner'
import ActionBack from '../../common/NavigationTop/ActionBack'
import DividerItem from '../../../ui/divider/Item'
import { grey1 } from '../../../ui/common/colors'

// Component
class Help extends PureComponent {

  onPressContact = () => {
    web(`${ LANDING_URL }/${ params.site.url.contact }`)
  }

  render() {
    return (
      <Body>
        {/* Navigation */}
        <NavigationTopInner
          title={translate.t('pages.help.title')}
          subTitle={translate.t('pages.help.subTitle')}
          leftIcon={
            <ActionBack />
          }
        />

        <ScrollView style={styles.container}>
          <View style={styles.content}>
            {/* About */}
            <Typography size={'h3'}>
              { translate.t('pages.help.content.about') }
            </Typography>

            {/* Feature 1 */}
            <View style={styles.section}>
              <Typography size={'h3'}>{ translate.t('pages.help.content.feature1.title') }</Typography>

              <View style={styles.item}>
                <View style={styles.itemRow}>
                  <View style={styles.itemBullet}><Typography size={'h5'} color={grey1}>-</Typography></View>
                  <View><Typography size={'h5'} color={grey1}>{ translate.t('pages.help.content.feature1.points.p1') }</Typography></View>
                </View>
              </View>

              <View style={styles.item}>
                <View style={styles.itemRow}>
                  <View style={styles.itemBullet}><Typography size={'h5'} color={grey1}>-</Typography></View>
                  <View><Typography size={'h5'} color={grey1}>{ translate.t('pages.help.content.feature1.points.p2') }</Typography></View>
                </View>
              </View>

              <View style={styles.item}>
                <View style={styles.itemRow}>
                  <View style={styles.itemBullet}><Typography size={'h5'} color={grey1}>-</Typography></View>
                  <View><Typography size={'h5'} color={grey1}>{ translate.t('pages.help.content.feature1.points.p3') }</Typography></View>
                </View>
              </View>

              <View style={styles.item}>
                <View style={styles.itemRow}>
                  <View style={styles.itemBullet}><Typography size={'h5'} color={grey1}>-</Typography></View>
                  <View><Typography size={'h5'} color={grey1}>{ translate.t('pages.help.content.feature1.points.p4') }</Typography></View>
                </View>
              </View>
            </View>

            {/* Feature 2 */}
            <View style={styles.section}>
              <Typography size={'h3'}>{ translate.t('pages.help.content.feature2.title') }</Typography>

              <View style={styles.item}>
                <View style={styles.itemRow}>
                  <View style={styles.itemBullet}><Typography size={'h5'} color={grey1}>-</Typography></View>
                  <View><Typography size={'h5'} color={grey1}>{ translate.t('pages.help.content.feature2.points.p1') }</Typography></View>
                </View>
              </View>

              <View style={styles.item}>
                <View style={styles.itemRow}>
                  <View style={styles.itemBullet}><Typography size={'h5'} color={grey1}>-</Typography></View>
                  <View><Typography size={'h5'} color={grey1}>{ translate.t('pages.help.content.feature2.points.p2') }</Typography></View>
                </View>
              </View>

              <View style={styles.item}>
                <View style={styles.itemRow}>
                  <View style={styles.itemBullet}><Typography size={'h5'} color={grey1}>-</Typography></View>
                  <View><Typography size={'h5'} color={grey1}>{ translate.t('pages.help.content.feature2.points.p3') }</Typography></View>
                </View>
              </View>

              <View style={styles.item}>
                <View style={styles.itemRow}>
                  <View style={styles.itemBullet}><Typography size={'h5'} color={grey1}>-</Typography></View>
                  <View><Typography size={'h5'} color={grey1}>{ translate.t('pages.help.content.feature2.points.p4') }</Typography></View>
                </View>
              </View>
            </View>
            
            <DividerItem margin={blockMargin * 1.5} />

            <Button title={translate.t('common.button.contact')} onPress={this.onPressContact} theme={'primary'} condensed />
          </View>
        </ScrollView>
      </Body>
    )
  }
}

export default Help
