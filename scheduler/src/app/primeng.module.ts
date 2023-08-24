
import { NgModule } from '@angular/core';
// Form
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputMaskModule } from 'primeng/inputmask';
import { PasswordModule } from 'primeng/password';
import { RadioButtonModule } from 'primeng/radiobutton';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ListboxModule } from 'primeng/listbox';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { CheckboxModule } from 'primeng/checkbox';
import { InputSwitchModule } from 'primeng/inputswitch';
// Panel
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { FieldsetModule } from 'primeng/fieldset';
import { DividerModule } from 'primeng/divider';
import { ScrollPanelModule } from 'primeng/scrollpanel';

// Data
import { TableModule } from 'primeng/table';

// Dialog
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';

// Menu
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';

// Button
import { ButtonModule } from 'primeng/button';
import { SpeedDialModule } from 'primeng/speeddial';
//import { SplitButtonModule } from 'primeng/splitbutton';

// Misc
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressBarModule } from 'primeng/progressbar';
import { BlockUIModule } from 'primeng/blockui';

// Directive
import { RippleModule } from 'primeng/ripple';

// Data
import { TreeModule } from 'primeng/tree';

// Sidebar J
import { SidebarModule } from 'primeng/sidebar';

// Media J
import { ImageModule } from 'primeng/image';
import { ChipModule } from 'primeng/chip';
import { GalleriaModule} from 'primeng/galleria';
import { TooltipModule} from 'primeng/tooltip';
import { PaginatorModule} from 'primeng/paginator';

const formModules = [
  AutoCompleteModule,
  InputTextModule,
  InputNumberModule,
  PasswordModule,
  RadioButtonModule,
  SelectButtonModule,
  ToggleButtonModule,
  ListboxModule,
  CalendarModule,
  InputTextareaModule,
  DropdownModule,
  InputMaskModule,
  CheckboxModule,
  MultiSelectModule,
  InputSwitchModule,
];

const PanelModules = [
  PanelModule,
  CardModule,
  ToolbarModule,
  FieldsetModule,
  DividerModule,
  ScrollPanelModule,
];
const DataModules = [
  TableModule
]

const dialog = [
  DialogModule,
  ToastModule,
  DynamicDialogModule,
  ConfirmPopupModule,
  ConfirmDialogModule,
];

const ButtonModules = [ButtonModule, SpeedDialModule];

const MenuModules = [MenuModule, MenubarModule, SidebarModule];

const miscModules = [ProgressSpinnerModule, BlockUIModule, ProgressBarModule];

const directiveModules = [RippleModule];

const dataDisplayModules = [TreeModule];

const extras = [PaginatorModule, ChipModule,GalleriaModule,TooltipModule,ImageModule];


@NgModule({
  imports: [
    ...formModules,
    ...PanelModules,
    ...DataModules,
    ...dialog,
    ...ButtonModules,
    ...MenuModules,
    ...directiveModules,
    ...miscModules,
    ...dataDisplayModules,
    ...extras

  ],
  exports: [
    ...formModules,
    ...PanelModules,
    ...DataModules,
    ...dialog,
    ...ButtonModules,
    ...MenuModules,
    ...directiveModules,
    ...miscModules,
    ...dataDisplayModules,
    ...extras
  ],
})
export class PrimeNGModule { }
//